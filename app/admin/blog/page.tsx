'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

type Post = {
  _id: string
  title: string
  slug?: { current: string }
  mainImage?: any
  publishedAt?: string
}

export default function AdminBlogPage() {
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const [posts, setPosts] = useState<Post[]>([])
  const [postsLoading, setPostsLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Post | null>(null)
  const [deleteError, setDeleteError] = useState<string | null>(null)

  const loadPosts = async () => {
    setPostsLoading(true)
    try {
      const data = await client.fetch<Post[]>(
        `*[_type == "post"] | order(publishedAt desc){ _id, title, slug, mainImage, publishedAt }`
      )
      setPosts(data)
    } finally {
      setPostsLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  useEffect(() => {
    if (!image) {
      setImagePreview(null)
      return
    }
    const url = URL.createObjectURL(image)
    setImagePreview(url)
    return () => URL.revokeObjectURL(url)
  }, [image])

  const handleSubmit = async () => {
    if (!title || !content || isSubmitting) return
    setIsSubmitting(true)
    setStatus(null)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    if (image) formData.append('image', image)

    try {
      const res = await fetch('/api/admin/create-blog', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setStatus({ type: 'success', message: 'Blog published successfully.' })
        setTitle('')
        setContent('')
        setImage(null)
        loadPosts()
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const confirmDelete = async () => {
    if (!deleteTarget) return
    const { _id } = deleteTarget
    setDeletingId(_id)
    setDeleteError(null)

    try {
      const res = await fetch('/api/admin/delete-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: _id }),
      })

      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p._id !== _id))
        setDeleteTarget(null)
      } else {
        setDeleteError('Could not delete this post. Please try again.')
      }
    } catch {
      setDeleteError('Could not delete this post. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
    } finally {
      router.push('/admin/login')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <p className="text-red-500 text-xs tracking-widest uppercase font-semibold">
            Admin
          </p>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors disabled:opacity-40"
          >
            {loggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">Add New Blog</h1>
        <p className="text-white/40 text-sm md:text-base mb-10">
          Publish a new story to the Pahadi Bhula blog.
        </p>

        <div className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-6 md:p-10 space-y-7">
          {/* Title */}
          <div>
            <label className="text-white/70 text-xs tracking-widest uppercase font-semibold block mb-3">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blog title"
              className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="text-white/70 text-xs tracking-widest uppercase font-semibold block mb-3">
              Cover Image
            </label>
            <div className="flex items-center gap-4">
              {imagePreview && (
                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                  <img src={imagePreview} alt="Cover preview" className="w-full h-full object-cover" />
                </div>
              )}
              <label className="flex-1 cursor-pointer">
                <div className="px-4 py-3.5 rounded-xl bg-black border border-dashed border-white/15 text-white/40 text-sm text-center hover:border-red-500/50 hover:text-white/60 transition-all">
                  {image ? image.name : 'Click to choose an image'}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="text-white/70 text-xs tracking-widest uppercase font-semibold block mb-3">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              placeholder="Write your blog content..."
              className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-y leading-relaxed"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleSubmit}
              disabled={!title || !content || isSubmitting}
              className="inline-flex items-center gap-3 bg-red-500 hover:bg-white text-white hover:text-black text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full font-semibold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-500 disabled:hover:text-white"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Blog'}
            </button>

            {status && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}
          </div>
        </div>

        {/* Manage / delete existing blogs */}
        <div className="mt-16">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-6">Manage Blogs</h2>

          {postsLoading ? (
            <p className="text-white/40 text-sm">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-white/40 text-sm">No blog posts yet.</p>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="flex items-center gap-4 bg-[#0d0d0d] border border-white/10 rounded-2xl p-4"
                >
                  <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).width(112).height(112).url()}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white/20 text-[10px]">No image</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{post.title}</p>
                    {post.publishedAt && (
                      <p className="text-white/40 text-xs mt-0.5">
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => { setDeleteTarget(post); setDeleteError(null) }}
                    disabled={deletingId === post._id}
                    className="shrink-0 text-xs tracking-widest uppercase text-red-400 hover:text-white hover:bg-red-500 border border-red-500/30 hover:border-red-500 px-4 py-2.5 rounded-full font-semibold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {deletingId === post._id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && !deletingId && setDeleteTarget(null)}
        >
          <div className="bg-[#0d0d0d] border border-white/10 rounded-3xl w-full max-w-sm p-7 text-center">
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </div>

            <h3 className="text-white text-lg font-semibold mb-2">Delete this post?</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              <span className="text-white/80 font-medium">&ldquo;{deleteTarget.title}&rdquo;</span> will be
              permanently removed. This can&apos;t be undone.
            </p>

            {deleteError && (
              <p className="text-red-400 text-xs mb-4">{deleteError}</p>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={!!deletingId}
                className="flex-1 text-sm font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/30 px-5 py-3 rounded-full transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={!!deletingId}
                className="flex-1 text-sm font-semibold bg-red-500 hover:bg-white text-white hover:text-black px-5 py-3 rounded-full transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {deletingId ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
