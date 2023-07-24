<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Info from '../test/Info.md'

const firstName = 'PO'

const { t } = useI18n()
</script>

<template>
  <Tester last-name="Bandit" />
  <Info />

  <h3 class="rounded-2xl bg-yellow-600 text-4xl text-purple-700">
    Hello {{ firstName }}
  </h3>
  <h5>{{ t('intro.desc') }}</h5>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
