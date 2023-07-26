<script lang="ts">
import type { TVShow } from '../types'

interface Genre {
  id: number
  name: string
}

export default {
  props: {
    tvShow: {
      type: Object as () => TVShow,
      required: true,
    },
  },

  data() {
    return {
      genreData: {
        genres: [
          {
            id: 10759,
            name: 'Action',
          },
          {
            id: 16,
            name: 'Animation',
          },
          {
            id: 35,
            name: 'Comedy',
          },
          {
            id: 80,
            name: 'Crime',
          },
          {
            id: 99,
            name: 'Documentary',
          },
          {
            id: 18,
            name: 'Drama',
          },
          {
            id: 10751,
            name: 'Family',
          },
          {
            id: 10762,
            name: 'Kids',
          },
          {
            id: 9648,
            name: 'Mystery',
          },
          {
            id: 10763,
            name: 'News',
          },
          {
            id: 10764,
            name: 'Reality',
          },
          {
            id: 10765,
            name: 'Fantasy',
          },
          {
            id: 10766,
            name: 'Soap',
          },
          {
            id: 10767,
            name: 'Talk',
          },
          {
            id: 10768,
            name: 'War',
          },
          {
            id: 37,
            name: 'Western',
          },
        ],
      },
    }
  },

  computed: {
    filteredGenreIds(): number[] {
      const genre_ids = this.tvShow.genre_ids as unknown as number[]
      return genre_ids.filter((genreId: number) => genreId !== 16)
    },
  },

  methods: {
    getFullPosterUrl(posterPath: string): string {
      const baseUrl = 'https://image.tmdb.org/t/p/'

      const posterSize = 'w342'

      return baseUrl + posterSize + posterPath
    },

    truncateText(text: string, maxLength: number): string {
      if (text.length <= maxLength)
        return text

      const truncatedText = text.substr(0, maxLength)
      const lastSpaceIndex = truncatedText.lastIndexOf(' ')

      if (lastSpaceIndex !== -1)
        return `${truncatedText.substr(0, lastSpaceIndex)}...`

      return `${truncatedText}...`
    },

    getGenreNames(genre_ids: number[]): string[] {
      const genreNames: string[] = []
      genre_ids.forEach((genreId: number) => {
        if (genreId !== 16) {
          const genre = this.genreData.genres.find((genre: Genre) => genre.id === genreId)
          if (genre)
            genreNames.push(genre.name)
        }
      })
      return genreNames
    },
  },
}
</script>

<template>
  <div class="animecard__container mx-4 h-[250px] w-11/12 flex rounded-lg bg-gray-200 shadow-lg lg:w-auto">
    <div class="animecard__img__container relative w-[160px] lg:w-[165px]">
      <img class="animcard__img h-full rounded-l object-cover object-center" :src="getFullPosterUrl(tvShow.poster_path)" alt="anime-poster">
      <div class="animecard__title lg:text-md absolute bottom-0 left-0 right-0 max-w-auto rounded-bl-sm bg-zinc-950 px-3 py-2 text-left text-sm text-white lg:px-4 lg:py-4">
        <h1 class="font-black">
          {{ tvShow.name }}
        </h1>
        <p>From <span class="font-bold">{{ tvShow.origin_country[0] }}</span></p>
      </div>
    </div>
    <div class="animecard__details relative max-h-[265px] w-70 px-6 text-left text-xs text-gray-800">
      <h1 class="animecard__airing pt-5 text-base font-bold lg:text-xl">
        Ratings: {{ tvShow.vote_average }}
      </h1>
      <h2 class="animecard__source pt-1">
        Votes: {{ tvShow.vote_count }}
      </h2>
      <div class="animecard__des py-3 text-sm">
        <p>{{ truncateText(tvShow.overview, 80) }}</p>
      </div>
      <div class="animecard__tag absolute bottom-0 left-0 right-0 max-w-full flex justify-center gap-2 rounded-br-lg bg-light-blue-50 px-3 py-3 pb-3 text-[12px] lg:justify-initial lg:px-6 lg:text-sm">
        <span v-for="genre_id in filteredGenreIds" :key="genre_id" class="rounded-xl bg-blue-400 px-2.3 py-0.5 text-white lg:px-3">{{ getGenreNames([genre_id]).join(', ') }}</span>
      </div>
    </div>
  </div>
</template>
