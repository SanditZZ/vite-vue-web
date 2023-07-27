import type { TVShow } from '~/types'

export function sortTvShowsByVoteAverage(tvShows: TVShow[]): TVShow[] {
  return tvShows.slice().sort((a, b) => b.vote_average - a.vote_average)
}
