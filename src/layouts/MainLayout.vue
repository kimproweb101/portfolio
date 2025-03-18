<template>
  <q-layout view="hHh lpR fff">
    <AppHeader />
    <q-page-container>
      <q-page>
        <AppCarousel />
        <div ref="section1">
          <AppPortfolio ref="section1" />
        </div>
        <div ref="section2">
          <AppTech />
        </div>
        <div ref="section3">
          <AppCareer />
        </div>
        <div ref="section4">
          <AppEdu />
        </div>
        <div ref="section5">
          <AppQna />
        </div>
      </q-page>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue'
import AppHeader from './header/AppHeader.vue'
import AppFooter from './footer/AppFooter.vue'
import AppCarousel from 'src/components/apps/AppCarousel.vue'
import AppPortfolio from 'src/components/apps/AppPortfolio.vue'
import AppTech from 'src/components/apps/AppTech.vue'
import AppQna from 'src/components/apps/AppQna.vue'
import AppCareer from 'src/components/apps/AppCareer.vue'
import AppEdu from 'src/components/apps/AppEdu.vue'

// 섹션 ref 정의
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)

// 자식 컴포넌트에 ref 제공
provide('sectionRefs', { section1, section2, section3, section4, section5 })

// 스크롤 이벤트 로직
const activeSection = ref('')

const onScroll = () => {
  const sections = { section1, section2, section3, section4, section5 }
  let foundSection = ''
  const scrollPosition = window.scrollY + window.innerHeight / 2

  for (const [id, refEl] of Object.entries(sections)) {
    if (refEl.value) {
      const rect = refEl.value.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const sectionBottom = sectionTop + rect.height

      // 현재 스크롤 위치가 섹션의 범위 내에 있는지 확인
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        foundSection = id
        break
      }
    }
  }

  // 스크롤을 올렸을 때 menu1의 활성 상태 해제
  if (scrollPosition < section1.value.offsetTop) {
    foundSection = ''
  }

  // activeSection 업데이트
  if (foundSection !== activeSection.value) {
    activeSection.value = foundSection
  }
}

// 스크롤 이벤트 등록
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// 자식 컴포넌트에 activeSection 제공
provide('activeSection', activeSection)
</script>
