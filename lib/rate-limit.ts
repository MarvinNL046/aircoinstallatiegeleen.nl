const WINDOW_SIZE = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // maximum requests per window

interface RateLimitResponse {
  success: boolean
  message?: string
}

export async function rateLimit(ip: string): Promise<RateLimitResponse> {
  const now = Date.now()
  const key = `rate-limit:${ip}`
  
  // Initialize global map if it doesn't exist
  if (!global.rateLimitMap) {
    global.rateLimitMap = new Map()
  }
  
  // Get existing requests or empty array
  const requests = global.rateLimitMap.get(key) || []
  const validRequests = requests.filter((timestamp: number) => now - timestamp < WINDOW_SIZE)

  if (validRequests.length >= MAX_REQUESTS) {
    return {
      success: false,
      message: "Te veel aanvragen. Probeer het over een minuut opnieuw."
    }
  }

  validRequests.push(now)
  global.rateLimitMap.set(key, validRequests)

  return { success: true }
}