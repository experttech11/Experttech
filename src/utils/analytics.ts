// Google Analytics & Conversion Tracking Helper

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
  // Console logging in dev mode for verification
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
};

export const trackConversion = {
  clickPhoneCall: (source: string) => {
    trackEvent('call_button_click', { event_category: 'Contact', event_label: source });
  },
  clickWhatsApp: (source: string, service?: string) => {
    trackEvent('whatsapp_click', {
      event_category: 'Lead',
      event_label: source,
      service: service || 'General',
    });
  },
  submitQuoteForm: (service: string, propertyType: string) => {
    trackEvent('quote_form_submit', {
      event_category: 'Lead',
      event_label: service,
      property_type: propertyType,
    });
  },
  submitCallbackRequest: (phone: string, service: string) => {
    trackEvent('callback_request', {
      event_category: 'Lead',
      service,
    });
  },
  requestSiteSurvey: (service: string, location: string) => {
    trackEvent('site_survey_booking', {
      event_category: 'Lead',
      service,
      location,
    });
  },
};
