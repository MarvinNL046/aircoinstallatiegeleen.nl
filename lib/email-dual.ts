import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1rruujp";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_rkcpzhg";

// LeadFlow CRM webhook configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

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

// Send to LeadFlow CRM webhook
const sendToLeadflow = async (data: EmailData | ExtendedEmailData): Promise<boolean> => {
  try {
    const isExtended = 'firstName' in data;
    let firstName: string;
    let lastName: string;
    let city: string;

    if (isExtended) {
      firstName = (data as ExtendedEmailData).firstName;
      lastName = (data as ExtendedEmailData).lastName;
      city = (data as ExtendedEmailData).city;
    } else {
      const nameParts = (data as EmailData).name.trim().split(' ');
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
      city = (data as EmailData).city || '';
    }

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city,
        woonplaats: city
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData | ExtendedEmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('Sending email with data:', data);
  }

  // Send to all services in parallel
  const [emailJSSuccess, leadflowSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToLeadflow(data)
  ]);

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Leadflow success:', leadflowSuccess);
  }

  // Only throw error if ALL methods fail
  if (!emailJSSuccess && !leadflowSuccess) {
    throw new Error('Failed to send contact form data');
  }
};

// Export the original function name for backward compatibility
export { sendEmail as sendEmailDual };

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