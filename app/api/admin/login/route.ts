import { NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_MAX_AGE, createSessionToken } from '@/lib/adminSession'
import { isRateLimited, clearRateLimit } from '@/lib/rateLimit'

function getClientKey(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for')
  return forwardedFor?.split(',')[0].trim() || 'unknown'
}

export async function POST(req: Request) {
  const clientKey = getClientKey(req)

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { success: false, error: 'Too many attempts. Please try again in a few minutes.' },
      { status: 429 }
    )
  }

  const { password } = await req.json()

  if (password === process.env.ADMIN_PASSWORD) {
    clearRateLimit(clientKey)

    const res = NextResponse.json({ success: true })
    res.cookies.set(ADMIN_SESSION_COOKIE, createSessionToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: ADMIN_SESSION_MAX_AGE,
      path: '/',
    })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}
