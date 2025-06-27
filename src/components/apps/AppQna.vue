<template>
  <div class="j-bg-grey q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <AppTitle title="질문 답변" subtitle="기본적인 질문 답변 내용입니다" />
          <q-card>
            <q-card-section>
              <div class="q-pt-sm" v-for="(item, index) in items" :key="index">
                <div class="q-pa-sm">
                  <div class="relative-position q-pl-lg">
                    <div class="absolute-top">Q.</div>
                    <div>{{ item.q }}</div>
                  </div>
                </div>
                <div class="q-pa-sm">
                  <div class="relative-position q-pl-lg">
                    <div class="absolute-top">A.</div>
                    <div>{{ item.a }}</div>
                  </div>
                </div>
                <q-separator />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppTitle from './AppTitle.vue'
const items = [
  {
    q: '본인만의 업무상 경쟁력은 무엇인가요?',
    a: `다양한 프로젝트에서 최종 책임을 맡으며, 모든 프로젝트를 성공적으로 마무리 해왔으며, 지속적으로 성장하여 현재는
    기획, 디자인, 퍼블리싱, 프론트 엔드, 백엔드, 배포까지 모든 과정을 원스톱으로 처리 가능합니다.`,
  },
  {
    q: '구직중이세요?',
    a: '구직중이며, 취업이 확정되면 포트폴리오 사이트를 닫을 예정 입니다.',
  },
]
</script>
<style scoped>
.container {
  max-width: 800px;
}
</style>
