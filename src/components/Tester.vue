<script setup lang="ts">
const props = defineProps<{ lastName: string }> ()
</script>

<template>
  <h3>
    Props Received: {{ props.lastName }}
  </h3>
</template>
