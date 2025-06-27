<template>
  <div>
    <div class="container q-py-xl">
      <div class="row">
        <div class="col-12">
          <AppTitle title="교육" subtitle="오프라인 교육" />
          <AppBasicTable :columns="columns" :rows="rows" class="text-body1" />
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="container q-py-xl">
      <div class="row">
        <div class="col-12">
          <AppTitle subtitle="온라인 교육" />
          <AppBasicTable :columns="columns2" :rows="rows2" class="text-body1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppTitle from 'src/components/apps/AppTitle.vue'
import AppBasicTable from 'src/components/apps/AppBasicTable.vue'

const columns = [
  { label: '기간', align: 'left', field: 'period', width: '195px' },
  { label: '합계', align: 'left', field: 'sum', width: '95px' },
  { label: '기관', align: 'left', field: 'company' },
  { label: '상세', align: 'left', field: 'detail' },
]
const rows = [
  {
    period: '2011.01~2011.02',
    sum: '2개월',
    company: '대우직업전문학교(대전)',
    detail: '웹디자인 창업&취업반 (포토샵 일러스트)',
  },
  {
    period: '2011.03~2011.07',
    sum: '5개월',
    company: '대우직업전문학교(대전)',
    detail: '포토샵, 일러스트, 인디자인',
  },
  {
    period: '2011.08~2011.10',
    sum: '3개월',
    company: '더좋은 컴퓨터 학원',
    detail: '웹디자인 고급반',
  },
  {
    period: '2012.08~2012.09',
    sum: '2개월',
    company: '웹표준',
    detail: '웹표준 퍼블리싱',
  },
  {
    period: '2013.03~2013.12',
    sum: '10개월',
    company: 'N-Screen 기반 융합 컨텐츠 제작',
    detail: '반응형 웹, php',
  },
]

const columns2 = [
  { label: '분류', align: 'left', field: 'category' },
  { label: '상세', align: 'left', field: 'list' },
]
const rows2 = [
  {
    category: 'vue',
    list: '장기효 로드맵, 짐코딩 로드맵, 개발자의 품격 로드맵, vue nodebird',
  },
  {
    category: 'nodejs',
    list: 'nodejs 교과서, 코드캠프 백앤드',
  },
  {
    category: 'php',
    list: '아이티런(php 멀티게시판, php 쇼핑몰)',
  },
]
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
