<template>
  <div class="j-bg-grey">
    <div class="q-pa-md container">
      <div class="row q-pt-xl">
        <div class="col-12">
          <div class="text-center text-h4" data-aos="fade-right">질문답변</div>
          <div class="text-center text-h5 text-primary q-pt-sm q-pb-sm" data-aos="fade-left">
            [질문 답변]
          </div>
        </div>
      </div>
      <div class="row q-pt-xl">
        <div class="col-12">
          <q-card>
            <q-card-section>
              <div class="q-pt-sm" v-for="(item, index) in items" :key="index">
                <div class="q-pa-sm">Q. {{ item.q }}</div>
                <div class="q-pa-sm">A. {{ item.a }}</div>
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
const items = [
  {
    q: '본인만의 업무상 경쟁력은 무엇인가요?',
    a: `다양한 프로젝트에서 최종 책임을 맡으며, 모든 프로젝트를 성공적으로 마무리 해왔으며, 지속적으로 성장하여 현재는
    기획, 디자인, 퍼블리싱, 프론트 엔드, 백엔드, 배포까지 모든 여정을 원스톰으로 처리 가능합니다.`,
  },
  {
    q: '구직 중이 신가요?',
    a: '구직 중이며, 취업이 확정되면 포트폴리오 사이트를 닫을 예정 입니다.',
  },
  {
    q: '현재 회사와 거리가 좀 먼데, 출근은 어떻게 하실 계획이세요?',
    a: '채용이 확정되면, 회사 근처로 이사를 계획하고 있습니다.',
  },
]
</script>
<style scoped>
.container {
  max-width: 800px;
}
</style>
