import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface TVShow {
  id: number
  name: string
  overview: string
  poster_path: string
  origin_country: string
  vote_average: number
  vote_count: number
  genre_ids: number
  // Add more properties as needed
}
