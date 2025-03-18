<template>
  <div class="j-bg-grey q-pa-lg">
    <div class="container q-py-xl">
      <div class="row">
        <div class="col-12">
          <AppTitle title="경력" subtitle="경력 사항" />
          <AppBasicTable :columns="columns" :rows="rows" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppTitle from 'src/components/apps/AppTitle.vue'
import AppBasicTable from 'src/components/apps/AppBasicTable.vue'

// 2022.05 ~ 2024.12 인필링
// 집터(가설자재 중계 플랫폼)

// 2018.10 ~ 2021.03 나우홀딩스
// 스쿨로직 개발(입시 플랫폼)

// 2014.05 ~ 2017.06 힐링인터네셔널
// 포스 시스템 개발(본사, 대리점, 소비자 통합)

// 2012.01 ~ 2012.07 한국교육 정보원
// e-러닝 개발(한남대, 중부대, 우송대)
// 대전 이그잼 고시학원 사이트 제작
// 대전 민족 부사관 장교학원 사이트 제작

const columns = [
  { label: '기간', align: 'left', field: 'period' },
  { label: '합계', align: 'left', field: 'sum' },
  { label: '기업', align: 'left', field: 'company' },
  { label: '상세', align: 'left', field: 'detail', html: true },
]

const rows = [
  {
    period: '2022.05 ~ 2024.12',
    sum: '2년 7개월',
    company: '인필링',
    detail: '집터 홈페이지, 비스트로앤 밀키트 쇼핑몰, 지원사업 모든 서류 작성',
  },
  {
    period: '2018.10 ~ 2021.03',
    sum: '2년 6개월',
    company: '투비유니콘 & 나우홀딩스',
    detail: `스쿨로직 포털 사이트 홈페이지, 투비유니콘 홈페이지, 도르 사회적 기업 홈페이지, 지원사업 스텔라 에그 홈페이지, 대치 유니업 학원 홈페이지`,
  },
  {
    period: '2014.05 ~ 2017.06',
    sum: '3년 1개월',
    company: '힐링인터네셔널',
    detail: `아메리퀴드 전자담배 가맹 사업 홍보용 홈페이지, 대리점 & 가맹점 포스 시스템, 일반 소비자용 전자담배 쇼핑몰, 힐링인터네셔널 본사 홈페이지`,
  },
  {
    period: '2012.01 ~ 2012.07',
    sum: '7개월',
    company: '한국교육 정보원',
    detail: `
      우송대 이러닝 제작,
      한남대 이러닝 제작,
      중부대 이러닝 제작,
      oa79 이러닝 제작,
      이그잼 고시학원 홈페이지 제작, 민족 부사관 장교학원 홈페이지 제작`,
  },
]
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
