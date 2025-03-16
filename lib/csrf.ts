import { randomBytes } from "crypto"

export function generateCSRFToken(): string {
  return randomBytes(32).toString("hex")
}

export function validateCSRFToken(token: string, storedToken?: string): boolean {
  if (!token || !storedToken) return false
  return token === storedToken
}

export function getCSRFToken(): string {
  if (typeof window === "undefined") return ""
  
  let token = sessionStorage.getItem("csrf_token")
  
  if (!token) {
    token = generateCSRFToken()
    sessionStorage.setItem("csrf_token", token)
  }
  
  return token
}