<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
// const user = useUserStore()
// const name = ref(user.savedName)

// const router = useRouter()
// function go() {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

// const { t } = useI18n()
</script>

<template>
  <div pb-8 pt-10>
    <h1 class="text-5xl font-black">
      <a rel="noreferrer">
        &#x1F575; Animation Hub &#x1F575;
      </a>
    </h1>
    <!-- <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 /> -->

    <!-- <TheInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label> -->
    <!--
    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
