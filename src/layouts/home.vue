<script lang="ts">
import axios from 'axios'
import type { TVShow } from '../types'

export default {
  data() {
    return {
      tvShows: [] as TVShow[],
      loading: true,
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/tv', {
        params: {
          api_key: 'abbc30ba48279b325d97ed21d788e651',
          with_genres: 16,
          airing_today: true,
        },
      })
      this.tvShows = response.data.results
      this.loading = false
    }
    catch (error) {
      console.error('Error fetching data:', error)
      this.loading = false
    }
  },
}
</script>

<template>
  <main
    overflow-x-hidden px-2.5 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />

    <TheHeader />

    <h1 class="py-5 text-3xl font-bold">
      Currently Airing Animation Shows
    </h1>
    <div>
      <div v-if="loading">
        Loading...
      </div>
      <div v-else class="animecard__wrap mx-0 flex flex-wrap justify-center gap-x-10 gap-y-10 lg:m-10">
        <AnimeCard v-for="(tvShow, index) in tvShows" :key="index" :tv-show="tvShow" />
      </div>
    </div>

    <TheFooter />
    <div mx-auto mt-5 text-center text-sm opacity-50>
    <!-- <h3>Home Layout</h3>
      [Home Layout]
    </div> -->
    </div>
  </main>
</template>
