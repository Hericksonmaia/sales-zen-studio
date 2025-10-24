import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ConversionEvent {
  eventName: string;
  eventSourceUrl: string;
  userData: {
    clientIpAddress?: string;
    clientUserAgent?: string;
    fbp?: string;
    fbc?: string;
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

    console.log('Processing Facebook conversion:', { eventName, eventSourceUrl });

    // Prepare the event data
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: eventSourceUrl,
          user_data: userData,
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
