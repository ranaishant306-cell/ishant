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
    const formData = await req.formData()
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const imageFile = formData.get('image') as File | null

    if (!title || !content) {
      return NextResponse.json({ success: false, error: 'Title and content are required' }, { status: 400 })
    }

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    let imageAsset = null
    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      imageAsset = await writeClient.assets.upload('image', buffer, {
        filename: imageFile.name,
      })
    }

    const doc: any = {
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      publishedAt: new Date().toISOString(),
      excerpt: content.slice(0, 160),
      body: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: content }],
        },
      ],
    }

    if (imageAsset) {
      doc.mainImage = {
        _type: 'image',
        asset: { _type: 'reference', _ref: imageAsset._id },
      }
    }

    const result = await writeClient.create(doc)

    return NextResponse.json({ success: true, result })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
