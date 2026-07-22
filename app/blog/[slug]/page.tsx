import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-white/70 leading-relaxed mb-5">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-semibold text-white mt-8 mb-3">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-red-500 pl-4 italic text-white/60 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside text-white/70 mb-5 space-y-1">{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="text-white font-semibold">{children}</strong>,
    link: ({ children, value }: any) => (
      <a href={value?.href} className="text-red-500 underline underline-offset-4">
        {children}
      </a>
    ),
  },
}

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      body
    }`,
    { slug }
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <main className="bg-black min-h-screen px-4 sm:px-6 md:px-16 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/about"
          className="inline-flex items-center gap-1 text-xs tracking-widest uppercase text-red-500 font-semibold mb-8"
        >
          ← Back
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        {post.publishedAt && (
          <p className="text-white/40 text-sm mb-8">
            {new Date(post.publishedAt).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        )}

        {post.mainImage && (
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 bg-white/5">
            <img
              src={urlFor(post.mainImage).width(1200).height(700).url()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            post.excerpt && <p className="text-white/70 leading-relaxed">{post.excerpt}</p>
          )}
        </div>
      </article>
    </main>
  )
}
