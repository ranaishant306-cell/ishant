import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/adminSession'

export function proxy(request: NextRequest) {
  const isLoggedIn = verifySessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value)

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}

export const config = {
  matcher: ['/admin/blog/:path*'],
}
