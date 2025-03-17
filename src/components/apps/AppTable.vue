<template>
  <div class="q-pa-md container">
    <div class="row q-pt-xl">
      <div class="col-12">
        <div class="text-center text-h4" data-aos="fade-right">기술</div>
        <div class="text-center text-h5 text-primary q-pt-sm q-pb-sm" data-aos="fade-left">
          [기술 한눈에 보기]
        </div>
      </div>
    </div>
    <AppBasicTable class="tableTech" :columns="columns" :rows="rows" />
  </div>
</template>
<script setup>
import AppBasicTable from 'src/components/apps/AppBasicTable.vue'

const columns = [
  { label: '구분', align: 'left', field: 'name' },
  { label: '설명', align: 'left', field: 'field' },
]

const rows = [
  {
    name: '디자인',
    field: '포토샵, 일러스트',
  },
  {
    name: '웹기본',
    field: 'html5, css2, css3, javascript, jquery, bootstrap, responsive web',
  },
  {
    name: '프론트엔드',
    field: 'vuejs, nuxt, vuetify, quasar',
  },
  {
    name: '백엔드',
    field: 'nodejs express, mysql, php, firebase',
  },
  {
    name: '인프라',
    field: 'aws, cafe24, netify, Heroku',
  },
  {
    name: '형상관리',
    field: 'git',
  },
  {
    name: '솔루션&CMS',
    field: '카페24 쇼핑몰, 고도몰5, 그누보드5, 영카트, 워드프레스',
  },
  {
    name: '자격증',
    field: '웹디자인 기능사, 컴퓨터 그래픽스 운용 기능사, 워드프로세서, 운전면허1종보통',
  },
  {
    name: '응용 기술',
    field:
      '회원 가입, 로그인, SNS 로그인, 로그인, 멀티 게시판, 쇼핑몰, 페이징, 무한스크롤, 결제 시스템, api연동, AWS배포, HTTPS 인증서 적용, swagger 문서 작성',
  },
  {
    name: '커뮤니케이션',
    field: '넓은 스펙트럼으로 다양한 분야의 직원분들과 의사 소통 능력이 좋습니다',
  },
]

console.log(columns)
console.log(rows)
</script>

<style scoped>
.container {
  max-width: 800px;
}
.tableTech {
  font-size: 15px;
}
</style>
