<template>
  <q-header elevated class="bg-white text-black">
    <q-toolbar class="container">
      <q-toolbar-title>
        <a href="#body" @click.prevent="homeScroll">
          <q-img class="logo" src="src/assets/img/common/logo_kjw.svg" />
        </a>
      </q-toolbar-title>
      <q-space />
      <template v-if="!$q.screen.xs">
        <q-btn
          type="button"
          v-for="(menu, index) in menus"
          :key="index"
          flat
          stretch
          size="lg"
          :class="{ active: activeSection === menu.to }"
          :label="menu.name"
          @click="scrollTo(menu.to)"
        />
      </template>
      <q-btn
        flat
        dense
        round
        icon="menu"
        class="q-mr-sm"
        @click="toggleDrawer"
        v-if="$q.screen.xs"
      />
    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawer" side="right" overlay behavior="mobile">
    <q-list>
      <q-item
        v-for="(menu, index) in menus"
        :key="index"
        clickable
        :class="{ active: activeSection === menu.to }"
        @click="handleDrawerClick(menu.to)"
      >
        <q-item-section>{{ menu.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref, inject, nextTick } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const drawer = ref(false)

const homeScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 부모 컴포넌트에서 제공된 ref와 상태 주입
const { section1, section2, section3 } = inject('sectionRefs')
const activeSection = inject('activeSection')

const menus = [
  { name: '포트폴리오', to: 'section1' },
  { name: '기술', to: 'section2' },
  { name: '질문답변', to: 'section3' },
]

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const scrollTo = (sectionId) => {
  const target = { section1, section2, section3 }[sectionId]?.value
  console.log(target)
  if (target) {
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
    activeSection.value = sectionId // 버튼 클릭 시 activeSection 업데이트
  }
}

const handleDrawerClick = (sectionId) => {
  drawer.value = false // drawer 닫기
  nextTick(() => {
    scrollTo(sectionId) // drawer가 닫힌 후 스크롤 실행
  })
}
</script>

<style scoped>
.active {
  font-weight: bold;
  color: #fff;
  background: #005cf4;
}
</style>
