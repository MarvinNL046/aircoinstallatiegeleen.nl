declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GHL_WEBHOOK_URL?: string;
      NEXT_PUBLIC_EMAILJS_SERVICE_ID?: string;
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?: string;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?: string;
    }
  }
}

export {}