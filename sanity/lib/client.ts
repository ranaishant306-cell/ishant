import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, isSanityConfigured } from '../env'

export const client = createClient({
  // Sanity requires a non-empty projectId to construct a client, even when
  // unconfigured — consumers should check `isSanityConfigured` before using it.
  projectId: projectId || 'unconfigured',
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export { isSanityConfigured }
