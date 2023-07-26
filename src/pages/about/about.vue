<script setup lang="ts">
</script>

<template>
  <h1 class="text-4xl">
    Hello!
  </h1>

  <nav flex="~ gap-4" my-5 justify-center text-xl>
    <RouterLink icon-btn to="/">
      <div i-carbon-home />
    </RouterLink>

    <button icon-btn @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a icon-btn rel="noreferrer" href="https://github.com/SanditZZ" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
