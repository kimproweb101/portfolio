<template>
  <div class="q-pb-lg">
    <div v-if="title" class="text-center text-h4" data-aos="fade-up">{{ title }}</div>
    <div v-if="subtitle" class="text-center text-h5 text-primary q-pt-sm" data-aos="fade-up">
      [{{ subtitle }}]
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
})
</script>

<style lang="scss" scoped></style>
