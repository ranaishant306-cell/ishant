const attempts = new Map<string, { count: number; firstAttempt: number }>()

const WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_ATTEMPTS = 5

/** In-memory sliding-window limiter, keyed by client identifier (e.g. IP). Good enough for a single-instance deployment; resets on server restart. */
export function isRateLimited(key: string): boolean {
  const now = Date.now()

  // Opportunistic cleanup so the map doesn't grow unbounded.
  for (const [k, record] of attempts) {
    if (now - record.firstAttempt > WINDOW_MS) attempts.delete(k)
  }

  const record = attempts.get(key)
  if (!record || now - record.firstAttempt > WINDOW_MS) {
    attempts.set(key, { count: 1, firstAttempt: now })
    return false
  }

  record.count++
  return record.count > MAX_ATTEMPTS
}

export function clearRateLimit(key: string): void {
  attempts.delete(key)
}
