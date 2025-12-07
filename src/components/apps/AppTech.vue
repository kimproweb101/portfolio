<template>
  <div class="container q-py-xl">
    <div class="row">
      <div class="col-12">
        <AppTitle title="기술" subtitle="기술 한눈에 보기" />
        <AppBasicTable :columns="columns" :rows="rows" class="text-body1" />
      </div>
    </div>
  </div>
</template>
<script setup>
import AppTitle from 'src/components/apps/AppTitle.vue'
import AppBasicTable from 'src/components/apps/AppBasicTable.vue'
const columns = [
  { label: '구분', align: 'left', field: 'name', width: '140px' },
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
    name: '프론트엔드(vue)',
    field: 'vue.js, nuxt, vuetify, quasar',
  },
  {
    name: '프론트엔드(react)',
    field: 'react, next, tailwindcss, shadcn ui',
  },
  {
    name: '백엔드',
    field: 'NodeJs express, NodeJs NestJs, mysql, php, firebase',
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
    field: `회원 가입, 로그인, SNS 로그인, 게시판, 쇼핑몰, 페이징, 무한스크롤, 결제 시스템, api연동, AWS배포, HTTPS 인증서 적용, swagger 문서 작성`,
  },
  {
    name: '커뮤니케이션',
    field: '넓은 스펙트럼으로 다양한 분야의 직원분들과 의사 소통 능력이 좋습니다',
  },
]
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
