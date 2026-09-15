import { createClient } from 'next-sanity'

export const writeClient = createClient({
  // Falls back to a placeholder so the client can construct when Sanity
  // hasn't been configured yet; callers should check `isSanityConfigured`.
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'unconfigured',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})