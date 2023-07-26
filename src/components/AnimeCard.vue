<script lang="ts">
import type { TVShow } from '../types'

export default {
  props: {
    tvShow: {
      type: Object as () => TVShow,
      required: true,
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
        <p>P.A. Works</p>
      </div>
    </div>
    <div class="animecard__details relative max-h-[265px] w-70 px-6 text-left text-xs text-gray-800">
      <h2 class="animecard__episode pt-5">
        Ep 1 of 23 airing in
      </h2>
      <h1 class="animecard__airing text-base font-bold lg:text-xl">
        1 day, 2 hours
      </h1>
      <h2 class="animecard__source">
        Source - Manga
      </h2>
      <div class="animecard__des py-3 text-sm">
        <p>{{ truncateText(tvShow.overview, 80) }}</p>
      </div>
      <div class="animecard__tag absolute bottom-0 left-0 right-0 max-w-full flex gap-2 rounded-br-lg bg-light-blue-50 px-7 py-3 pb-3 text-xs lg:text-sm">
        <span class="rounded-xl bg-blue-400 px-3 py-0.5 text-white">action</span> <span class="rounded-xl bg-blue-400 px-3 py-0.5 text-white">adventure</span>
      </div>
    </div>
  </div>
</template>
