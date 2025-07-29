import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1rruujp";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_rkcpzhg";

// GoHighLevel webhook configuration
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || 
  "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

// Debug mode for troubleshooting
const DEBUG_MODE = process.env.NODE_ENV === 'development';

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  city?: string;
}

export interface ExtendedEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  message: string;
  roomType?: string;
  aircoCapacity?: string;
  bestCallTime?: string;
  province?: string;
  contactSource?: string;
}

// Send via EmailJS
const sendViaEmailJS = async (data: EmailData | ExtendedEmailData): Promise<boolean> => {
  try {
    const isExtended = 'firstName' in data;
    
    const templateParams = isExtended ? {
      from_name: `${(data as ExtendedEmailData).firstName} ${(data as ExtendedEmailData).lastName}`,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      city: (data as ExtendedEmailData).city,
      postal_code: (data as ExtendedEmailData).postalCode,
      address: (data as ExtendedEmailData).streetAddress,
      room_type: (data as ExtendedEmailData).roomType || '',
      capacity: (data as ExtendedEmailData).aircoCapacity || '',
      call_time: (data as ExtendedEmailData).bestCallTime || '',
      contact_number: Math.random() * 100000 | 0,
    } : {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      city: data.city || '',
      contact_number: Math.random() * 100000 | 0,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Send to GoHighLevel webhook
const sendToWebhook = async (data: EmailData | ExtendedEmailData): Promise<boolean> => {
  try {
    // Check if it's extended data
    const isExtended = 'firstName' in data;
    
    // All forms use data wrapper for consistency
    const webhookData = {
      data: isExtended ? {
        "First Name": (data as ExtendedEmailData).firstName,
        "Last Name": (data as ExtendedEmailData).lastName,
        "Email": data.email,
        "Phone": data.phone || '',
        "City": (data as ExtendedEmailData).city,
        "Postal Code": (data as ExtendedEmailData).postalCode,
        "Street Address": (data as ExtendedEmailData).streetAddress,
        "Informatie van staycoolairco.nl": data.message,
        "Voor welk type ruimte wilt u een airco?": (data as ExtendedEmailData).roomType || '',
        "Weet u welk vermogen (kW) uw airco nodig heeft?": (data as ExtendedEmailData).aircoCapacity || '',
        "Wanneer kunnen wij je het beste telefonisch bereiken voor meer informatie?": (data as ExtendedEmailData).bestCallTime || '',
        "Welke provincie?": (data as ExtendedEmailData).province || '',
        "Contact Source": (data as ExtendedEmailData).contactSource || 'aircoinstallatiegeleen.nl',
        "Datum lead binnen": new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      } : {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        city: data.city || '',
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": typeof window !== 'undefined' ? window.location.origin : 'https://aircoinstallatiegeleen.nl',
        "Referer": typeof window !== 'undefined' ? window.location.href : 'https://aircoinstallatiegeleen.nl/'
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response:', response.status, response.statusText);
    }

    if (response.ok) {
      if (DEBUG_MODE) console.log('✅ Webhook submission successful');
      return true;
    } else {
      console.warn('❌ Webhook submission failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData | ExtendedEmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('Sending email with data:', data);
  }

  // Send to both services in parallel
  const [emailJSSuccess, webhookSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToWebhook(data)
  ]);

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Webhook success:', webhookSuccess);
  }
  
  // Only throw error if BOTH methods fail
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Failed to send contact form data');
  }
};

// Export the original function name for backward compatibility
export { sendEmail as sendEmailDual };

// Export webhook-only function for testing
export const sendToWebhookOnly = async (data: EmailData | ExtendedEmailData): Promise<boolean> => {
  return sendToWebhook(data);
};

// Helper function to send extended form data
export const sendExtendedEmail = async (data: ExtendedEmailData): Promise<void> => {
  return sendEmail(data);
};

// Analytics tracking helpers
export const trackFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      form_type: formType,
      success: success,
      send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    });
  }
};

export const trackPixelFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: formType,
      status: success ? 'completed' : 'failed'
    });
  }
};