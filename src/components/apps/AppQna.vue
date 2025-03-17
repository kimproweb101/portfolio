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
    a: `최신의 개발역량과, 디자인 역량까지 준비되어, 기획부터 서비스 배포까지 모든 여정을 원스톰으로 처리 가능합니다.`,
  },
  {
    q: '구직 중이 신가요?',
    a: '네~구직 중이며, 취업이 확정되면 포트폴리오 사이트를 닫을 예정 입니다.',
  },
  {
    q: '현재 회사와 거리가 좀 먼데, 출근은 어떻게 하실 계획이세요?',
    a: '채용이 확정되면, 회사 근처로 이사를 계획하고 있습니다.',
  },
  {
    q: '질문 답변 내용이 별로 없군요?',
    a: '내용은 좀더 추가할 계획입니다.',
  },
]
</script>
<style scoped>
.container {
  max-width: 800px;
}
</style>
