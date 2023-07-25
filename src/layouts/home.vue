<template>
  <main
    overflow-x-hidden px-2.5 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />
    <div class="animecard__wrap mx-0 flex flex-wrap justify-center gap-x-6 gap-y-10 lg:m-10">
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
    </div>
    <TheFooter />
    <div mx-auto mt-5 text-center text-sm opacity-50>
      <h3>Home Layout</h3>
      [Home Layout]
    </div>
  </main>
</template>
