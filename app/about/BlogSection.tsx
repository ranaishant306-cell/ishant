// // app/about/BlogSection.tsx
// import { client } from '@/sanity/lib/client'
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(client)
// function urlFor(source: any) {
//   return builder.image(source)
// }

// async function getBlogs() {
//   return client.fetch(`*[_type == "post"] | order(publishedAt desc){
//     title,
//     slug,
//     excerpt,
//     mainImage,
//     publishedAt
//   }`)
// }

// export default async function BlogSection() {
//   const blogs = await getBlogs()

//   if (!blogs || blogs.length === 0) return null

//   return (
//     <section className="py-20 px-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//         Our Blog
//       </h2>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {blogs.map((blog: any) => (
//           <div
//             key={blog.slug?.current || blog.title}
//             className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition"
//           >
//             {blog.mainImage && (
//               <img
//                 src={urlFor(blog.mainImage).width(500).height(300).url()}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//             )}
//             <div className="p-5">
//               <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
//               {blog.excerpt && (
//                 <p className="text-gray-500 text-sm">{blog.excerpt}</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }




// app/about/BlogSection.tsx
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

async function getBlogs() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`)
}

export default async function BlogSection() {
  const blogs = await getBlogs()

  if (!blogs || blogs.length === 0) return null

  return (
    <section className="bg-black py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Our Blog
        </h2>
        <p className="text-white/50 text-sm md:text-base text-center mb-10 md:mb-14 max-w-xl mx-auto">
          Stories, behind-the-scenes, and updates from the world of Pahadi Bhula.
        </p>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: any) => (
            <Link
              key={blog.slug?.current || blog.title}
              href={`/blog/${blog.slug?.current || ''}`}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] hover:border-white/25 transition-all duration-300"
            >
              <div className="relative w-full h-48 bg-white/5 overflow-hidden">
                {blog.mainImage ? (
                  <img
                    src={urlFor(blog.mainImage).width(500).height(300).url()}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
                    No image available
                  </div>
                )}
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-red-500 transition-colors">
                  {blog.title}
                </h3>
                {blog.excerpt && (
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-xs tracking-widest uppercase text-red-500 font-semibold">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}