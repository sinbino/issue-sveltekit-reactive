import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  if (params.date != null) {
    return { date: params.date }
  }
  return { date: undefined }
}
