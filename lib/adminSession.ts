import crypto from 'crypto'

export const ADMIN_SESSION_COOKIE = 'admin_session'
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days, in seconds

function getSecret(): string {
  const secret = process.env.SESSION_SECRET
  if (!secret) {
    throw new Error('Missing environment variable: SESSION_SECRET')
  }
  return secret
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('hex')
}

/** Creates a signed, expiring session token. Value carries its own expiry, so it can be verified statelessly. */
export function createSessionToken(): string {
  const expires = Date.now() + ADMIN_SESSION_MAX_AGE * 1000
  const payload = `admin.${expires}`
  return `${payload}.${sign(payload)}`
}

/** Verifies signature + expiry. Uses a constant-time comparison to avoid timing side-channels. */
export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false

  const lastDot = token.lastIndexOf('.')
  if (lastDot === -1) return false

  const payload = token.slice(0, lastDot)
  const signature = token.slice(lastDot + 1)

  let expectedBuf: Buffer
  let signatureBuf: Buffer
  try {
    expectedBuf = Buffer.from(sign(payload), 'hex')
    signatureBuf = Buffer.from(signature, 'hex')
  } catch {
    return false
  }
  if (expectedBuf.length !== signatureBuf.length) return false
  if (!crypto.timingSafeEqual(expectedBuf, signatureBuf)) return false

  const expires = Number(payload.split('.')[1])
  if (!expires || Date.now() > expires) return false

  return true
}
