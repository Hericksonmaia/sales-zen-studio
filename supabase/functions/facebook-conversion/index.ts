import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ConversionEvent {
  eventName: string;
  eventSourceUrl: string;
  userData: {
    client_user_agent?: string;
    fbp?: string;
    fbc?: string;
    external_id?: string;
    em?: string; // Hashed email
  };
  customData?: Record<string, any>;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const pixelId = '990028642721674';
    const accessToken = Deno.env.get('FACEBOOK_API_TOKEN');

    if (!accessToken) {
      throw new Error('Facebook API token not configured');
    }

    const { eventName, eventSourceUrl, userData, customData }: ConversionEvent = await req.json();

    // Extract client IP from headers (multiple sources for better capture)
    const getClientIp = (): string | undefined => {
      // Try different headers in order of reliability
      const forwardedFor = req.headers.get('x-forwarded-for');
      if (forwardedFor) {
        const ip = forwardedFor.split(',')[0].trim();
        if (ip && isValidIp(ip)) return ip;
      }

      const realIp = req.headers.get('x-real-ip');
      if (realIp && isValidIp(realIp)) return realIp;

      const cfConnecting = req.headers.get('cf-connecting-ip');
      if (cfConnecting && isValidIp(cfConnecting)) return cfConnecting;

      return undefined;
    };

    // Validate IP format (basic IPv4/IPv6 check)
    const isValidIp = (ip: string): boolean => {
      const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
      const ipv6Regex = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;
      return ipv4Regex.test(ip) || ipv6Regex.test(ip);
    };

    const clientIp = getClientIp();

    console.log('Processing Facebook conversion:', { 
      eventName, 
      eventSourceUrl,
      clientIp,
      hasEmail: !!userData.em,
      hasExternalId: !!userData.external_id,
      hasFbp: !!userData.fbp,
      hasFbc: !!userData.fbc,
    });

    // Prepare user data with all identification parameters
    const enrichedUserData = {
      ...userData,
      client_ip_address: clientIp,
    };

    // Remove undefined fields to keep payload clean
    Object.keys(enrichedUserData).forEach(key => {
      if (enrichedUserData[key as keyof typeof enrichedUserData] === undefined) {
        delete enrichedUserData[key as keyof typeof enrichedUserData];
      }
    });

    // Prepare the event data
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: eventSourceUrl,
          user_data: enrichedUserData,
          custom_data: customData || {},
          action_source: 'website',
        },
      ],
    };

    // Send to Facebook Conversions API
    const fbResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }
    );

    const result = await fbResponse.json();

    if (!fbResponse.ok) {
      console.error('Facebook API error:', result);
      throw new Error(result.error?.message || 'Failed to send conversion event');
    }

    console.log('Facebook conversion sent successfully:', result);

    return new Response(
      JSON.stringify({ success: true, result }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error processing Facebook conversion:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
