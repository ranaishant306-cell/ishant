import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { writeClient } from '@/sanity/lib/writeClient'
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/adminSession'

export async function POST(req: Request) {
  const cookieStore = await cookies()
  if (!verifySessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await req.json()

    if (!id) {
      return NextResponse.json({ success: false, error: 'Missing post id' }, { status: 400 })
    }

    await writeClient.delete(id)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
