<template>
  <div class="q-pa-xs">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-2 text-grey-7"
          active-color="primary"
          align="justify"
        >
          <q-tab v-for="tab in tabs" :key="tab.id" :name="tab.name" :label="tab.label" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-for="tab in tabs" :key="tab.id" :name="tab.name">
            <ul>
              <li>{{ tab.desc }}</li>
            </ul>
            <template v-if="tab.type === 'img'">
              <q-img :src="tab.src" />
            </template>
            <template v-else-if="tab.type === 'youtube'">
              <q-video :ratio="16 / 9" :src="`https://www.youtube.com/embed/${tab.src}?rel=0`" />
            </template>
            <template v-else-if="tab.type === 'webm'">
              <q-video :ratio="16 / 9" :src="`${tab.src}`" />
            </template>

            <template v-else> 컨텐츠가 없습니다. </template>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('tab1')
defineProps(['tabs'])
</script>
