<script lang="ts">
import axios from 'axios'
import type { TVShow } from '../types'
import { sortTvShowsByVoteAverage } from '../utils/sortUtils'

export default {

  data() {
    return {
      tvShows: [] as TVShow[],
      loading: true,
      ascendingSort: true,
      searchQuery: '',
    }
  },

  computed: {
    sortedTVShows(): TVShow[] {
      return sortTvShowsByVoteAverage(this.tvShows)
    },
    filteredTVShows(): TVShow[] {
      const searchQueryLower = this.searchQuery.toLowerCase().trim()
      if (searchQueryLower) {
        return this.tvShows.filter(tvShows =>
          tvShows.name.toLowerCase().includes(searchQueryLower),
        )
      }
      else {
        return this.tvShows
      }
    },
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

  methods: {
    sortTvShowsByVoteAverage(): void {
      this.tvShows = sortTvShowsByVoteAverage(this.tvShows)
    },
    toggleSorting() {
      // Toggle the sorting order
      this.ascendingSort = !this.ascendingSort

      // Sort the TV shows based on the sorting order
      const sortedTvShows = sortTvShowsByVoteAverage(this.tvShows)

      // If sorting order is descending (lowest ratings first), reverse the array
      if (!this.ascendingSort)
        this.tvShows = sortedTvShows.reverse()

      else
        this.tvShows = sortedTvShows
    },
    onSearchInput() {
      this.ascendingSort = true
    },
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

    <h1 class="pb-3 text-xl font-bold lg:py-8 lg:text-3xl">
      Currently Airing Animation Shows
    </h1>

    <!-- sort button -->
    <div flex justify-center py-8 lg:py-3>
      <button inline flex justify-center gap-2 text-center @click="toggleSorting">
        Sort by Ratings
        <div v-if="ascendingSort" i-carbon-arrow-up />
        <div v-else i-carbon-arrow-down />
      </button>
    </div>

    <!-- Search input -->
    <div pb-10 lg:py-3 lg:pb-1>
      <input v-model="searchQuery" border-1 border-blueGray rounded-md bg-white px-3 py-1 text-blueGray shadow-md focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 type="text" placeholder="Search Shows" @input="onSearchInput">
    </div>

    <div>
      <div v-if="loading">
        Loading...
      </div>
      <div v-else-if="filteredTVShows.length === 0">
        <p py-3>
          No Results Found
        </p>
      </div>
      <div v-else class="animecard__wrap mx-0 flex flex-wrap justify-center gap-x-10 gap-y-10 lg:m-10">
        <AnimeCard v-for="(tvShow, index) in filteredTVShows" :key="index" :tv-show="tvShow" />
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
