import { supabase } from "@/integrations/supabase/client";

const PIXEL_ID = '990028642721674';

// Get Facebook Click ID and Browser ID from cookies
const getFacebookParams = () => {
  const fbp = document.cookie
    .split('; ')
    .find((row) => row.startsWith('_fbp='))
    ?.split('=')[1];

  const fbc = document.cookie
    .split('; ')
    .find((row) => row.startsWith('_fbc='))
    ?.split('=')[1];

  return { fbp, fbc };
};

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return;

  // Check if already loaded
  if ((window as any).fbq) return;

  // Load Facebook Pixel script
  const fbqScript = function (f: any, b: any, e: any, v: any) {
    let n: any, t: any, s: any;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  };
  
  fbqScript(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  // Initialize pixel
  (window as any).fbq('init', PIXEL_ID);
  
  console.log('Facebook Pixel initialized:', PIXEL_ID);
};

// Track PageView with enriched data
export const trackPageView = async () => {
  if (typeof window === 'undefined') return;

  // Collect enriched parameters
  const enrichedData = {
    page_url: window.location.href,
    page_title: document.title,
    referrer: document.referrer || null,
    language: navigator.language || (navigator as any).userLanguage,
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    user_agent: navigator.userAgent,
    platform: navigator.platform,
    cookies_enabled: navigator.cookieEnabled,
    color_depth: window.screen.colorDepth,
    device_memory: (navigator as any).deviceMemory || 'unknown',
    hardware_concurrency: navigator.hardwareConcurrency || 'unknown',
    connection_type: (navigator as any).connection ? (navigator as any).connection.effectiveType : 'unknown',
    random_id: Math.random().toString(36).substring(2, 10)
  };

  // Client-side pixel tracking with enriched data
  (window as any).fbq?.('track', 'PageView', enrichedData);
  console.log('PageView tracked with enriched data:', enrichedData);

  // Server-side conversion API
  try {
    const { fbp, fbc } = getFacebookParams();

    await supabase.functions.invoke('facebook-conversion', {
      body: {
        eventName: 'PageView',
        eventSourceUrl: window.location.href,
        userData: {
          client_user_agent: navigator.userAgent,
          fbp,
          fbc,
        },
        customData: enrichedData,
      },
    });
  } catch (error) {
    console.error('Error tracking PageView:', error);
  }
};

// Track Lead event
export const trackLead = async (leadData?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  // Client-side pixel tracking
  (window as any).fbq?.('track', 'Lead');

  // Server-side conversion API
  try {
    const { fbp, fbc } = getFacebookParams();

    await supabase.functions.invoke('facebook-conversion', {
      body: {
        eventName: 'EndLead',
        eventSourceUrl: window.location.href,
        userData: {
          client_user_agent: navigator.userAgent,
          fbp,
          fbc,
        },
        customData: leadData,
      },
    });
  } catch (error) {
    console.error('Error tracking Lead:', error);
  }
};
