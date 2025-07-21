import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
const EMAILJS_SERVICE_ID = "service_1rruujp";
const EMAILJS_TEMPLATE_ID = "template_rkcpzhg";

// GoHighLevel webhook configuration
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || 
  "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

// Debug mode for troubleshooting
const DEBUG_MODE = false;

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  city?: string;
}

// Send via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
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
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || 'Not specified',
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response:', response.status, await response.text());
    }

    if (!response.ok) {
      if (DEBUG_MODE) {
        console.error('Webhook failed with status:', response.status);
      }
      return false;
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
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
export const sendToWebhookOnly = async (data: EmailData): Promise<boolean> => {
  return sendToWebhook(data);
};