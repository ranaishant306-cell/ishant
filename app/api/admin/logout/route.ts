import { NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE } from '@/lib/adminSession'

export async function POST() {
  const res = NextResponse.json({ success: true })
  res.cookies.delete(ADMIN_SESSION_COOKIE)
  return res
}
