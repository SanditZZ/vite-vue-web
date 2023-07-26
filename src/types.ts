import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface TVShow {
  name: string
  overview: string
  poster_path: string
  // Add more properties as needed
}
