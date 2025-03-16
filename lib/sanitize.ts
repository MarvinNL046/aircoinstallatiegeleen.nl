import DOMPurify from "isomorphic-dompurify"

export function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input.trim(), {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
  })
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  // Nederlands telefoonnummer formaat
  const phoneRegex = /^(\+31|0)([1-9][0-9]{8}|[1-9][0-9]{1,2}[- ]?[0-9]{6,7})$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

export function sanitizeFormData<T extends Record<string, unknown>>(data: T): T {
  const sanitized = { ...data }
  
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "string") {
      // Use type assertion to handle the generic type
      (sanitized as any)[key] = sanitizeInput(value)
    }
  })
  
  return sanitized
}