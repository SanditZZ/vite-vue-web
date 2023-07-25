<template>
  <div class="animecard__container h-[265px] flex rounded bg-gray-200 shadow-lg">
    <div class="animecard__img__container relative lg:w-[185px]">
      <img class="animcard__img h-full rounded-l object-cover object-center" src="https://placeholder.com/185x265" alt="anime-poster">
      <div class="animecard__title lg:text-md absolute bottom-0 left-0 right-0 max-w-full rounded-bl-sm bg-zinc-950 px-3 py-2 text-left text-sm text-white lg:px-4 lg:py-4">
        <h1 class="font-black">
          Skip and Loafer
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
        <p>A new anime project adapting popular side stories that were left out from the previous adaptation.</p>
      </div>
      <div class="animecard__tag absolute bottom-0 left-0 right-0 max-w-full flex gap-2 rounded-br bg-light-blue-50 px-7 py-3 pb-3 text-xs lg:text-sm">
        <span class="rounded-xl bg-blue-400 px-3 py-0.5 text-white">action</span> <span class="rounded-xl bg-blue-400 px-3 py-0.5 text-white">adventure</span>
      </div>
    </div>
  </div>
</template>
