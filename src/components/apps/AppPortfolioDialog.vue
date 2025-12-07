<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-bind="$attrs" transition-show="rotate" transition-hide="rotate">
      <q-card style="width: 1200px; max-width: 90vw">
        <q-card-section class="flex justify-between">
          <div class="text-h6">자세히 보기</div>
          <q-card-actions align="right">
            <q-btn flat icon="close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card-section>
        <q-card-section class="scroll">
          <AppTab :tabs="tabs" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import AppTab from './AppTab.vue'
defineProps(['tabs'])
</script>

<style lang="scss" scoped></style>
