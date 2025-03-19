<template>
  <div>
    <div
      v-for="(portfolio, index) in portfolios"
      :key="portfolio.id"
      class="q-py-xl"
      :class="{ portfolioBgGrey: index % 2 !== 0 }"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <AppTitle :title="portfolio.title" :subtitle="portfolio.subtitle" />
          </div>
        </div>
        <div class="row q-pt-lg">
          <div class="col-xs-12 col-md-6 q-pa-md" data-aos="flip-right">
            <img width="100%" :src="portfolio.img" />
          </div>
          <div class="col-xs-12 col-md-6 q-pa-md" data-aos="flip-left">
            <q-btn
              label="자세히 보기"
              @click="doDialog(portfolio.tabs)"
              size="lg"
              color="primary"
              class="full-width"
            />
            <div class="text-h6">
              <ul>
                <li
                  class="text-grey-8 text-body1"
                  v-for="(item, index) in portfolio.desc"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppPortfolioDialog v-model="dialog" :tabs="tabs" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppPortfolioDialog from 'src/components/apps/AppPortfolioDialog.vue'
import AppTitle from './AppTitle.vue'
const dialog = ref(false)
const tabs = ref()
const doDialog = (_tabs) => {
  tabs.value = _tabs
  dialog.value = true
}

const portfolios = [
  {
    id: 1,
    title: '집터',
    img: '/img/portfolio/list/portfolio_zipter.png',
    subtitle: '건설자재 중개 플랫폼',
    desc: [
      '프로젝트 개요 : 가설자재 중개 시스템',
      '국비 지원 사업 관련 보고서 작성',
      '특허 및 상표 등록 관련 업무',
      '전체 시스템 개발',
      '사용 기술 : vue nuxt, vuetify, nodejs express, mysql, aws',
    ],
    tabs: [
      {
        tabid: 1,
        name: 'tab1',
        label: '메인',
        type: 'img',
        src: '/img/portfolio/detail/zipterMain.jpg',
        desc: '메인 화면',
      },
      {
        tabid: 2,
        name: 'tab2',
        label: '지도',
        type: 'img',
        src: '/img/portfolio/detail/zipterMap.jpg',
        desc: '다음 지도 api를 연동하여, 건설사 및 가설업체 지도페이지를 작성 했습니다.',
      },
      {
        tabid: 3,
        name: 'tab3',
        label: '주문1',
        type: 'img',
        src: '/img/portfolio/detail/zipterOrder01.png',
        desc: '가설자재 임대 주문 페이지를 작성 했습니다.',
      },
      {
        tabid: 4,
        name: 'tab4',
        label: '주문2',
        type: 'img',
        src: '/img/portfolio/detail/zipterOrder02.png',
        desc: '가설자재 구매 주문 페이지를 작성 했습니다.',
      },
      {
        tabid: 5,
        name: 'tab5',
        label: '관리자',
        type: 'img',
        src: '/img/portfolio/detail/zipterAdmProject.png',
        desc: `관리자 페이지는 건설사 관리자, 유통사 관리자, 본사 관리자로 구성 되어있으며,
              프로젝트 관리, 공사현장 관리, 임대주문, 구매주문이 가능하도록 개발 했습니다.`,
      },
    ],
  },
  {
    id: 2,
    title: '비스트로앤 밀키트',
    img: '/img/portfolio/list/portfolio_bistroand.png',
    subtitle: '쇼핑몰 시스템 구축',
    desc: [
      '전체 작업 100%',
      '자사몰 : 카페24 쇼핑몰 커스터마이징',
      '주문 통합관리 시스템 (쿠팡, 네이버 스마트 스토어, 옥션, 지마켓)',
      '로고, 배너, 상세페이지 디자인 및 사진 촬영, 영상 촬영',
      '심사 및 결제 관련 업무',
    ],
    tabs: [
      {
        tabid: 1,
        name: 'tab1',
        label: '감바스',
        type: 'img',
        src: '/img/portfolio/detail/bistroandG.jpg',
        desc: '감바스',
      },
      {
        tabid: 2,
        name: 'tab2',
        label: '오징어 먹물 리조또',
        type: 'img',
        src: '/img/portfolio/detail/bistroandO.jpg',
        desc: '오징어 먹물 리조또',
      },
      {
        tabid: 3,
        name: 'tab3',
        label: '로제 파스타 밀키트',
        type: 'img',
        src: '/img/portfolio/detail/bistroandR.jpg',
        desc: '로제 파스타 밀키트',
      },
    ],
  },
  {
    id: 3,
    title: '스쿨로직',
    img: '/img/portfolio/list/portfolio_skoologic.png',
    subtitle: '입시 플랫폼',
    desc: [
      '참여율 : 프론트 엔드(100%), 백엔드 개발(100%)',
      '전체 시스템 개발',
      '유사도 검사 기능 개발',
      '대입 자소서 검사 기능 개발(결제 후 사용)',
      '마이생기부 개발(생활기록부 관리 시스템)',
      'api 연동(급식정보, 워크넷, kocw, 국립 중앙도서관)',
      '컨텐츠 판매 시스템 구축',
      '전국 다수의 학교에서 사용 중',
    ],
    tabs: [
      {
        tabid: 1,
        name: 'tab1',
        label: '글자수세기',
        type: 'youtube',
        src: 'rOnxcLpc7LI',
        desc: '글자수세기',
      },
      {
        tabid: 2,
        name: 'tab2',
        label: '내신계산기',
        type: 'youtube',
        src: 'rOnxcLpc7LI',
        desc: '내신계산기',
      },
      {
        tabid: 3,
        name: 'tab3',
        label: '유사도검사',
        type: 'youtube',
        src: 'BUN17PDdZNs',
        desc: '유사도검사',
      },
    ],
  },
  {
    id: 3,
    title: '포스시스템',
    img: '/img/portfolio/list/portfolio_pos.png',
    subtitle: '기업 맞춤형 포스 시스템 개발',
    desc: [
      '참여율 : 프론트 엔드(100%), 백엔드 개발(100%)',
      '판매 화면에서 회원의 주문 내역을 확인 할 수 있음',
      '판매 화면에서 재고를 파악 할수 있음',
      '본사 도매몰에서 묶음단위 주문을 소비자에게 낱개 단위로 판매 가능',
      '판매화면에서 지난 주문내역을 확인 하여 재방문 고객 응대가 편리',
      '본사 도매몰과 연동되어 주문한 상품을 매장에 입고 할 수 있음',
      '본사 주문가격과, 소비자 판매 가격을 비교하여, 대리점 순이익을 파악할 수 있음',
      '페이지 새로 고침 없이 동작 되도록 설계',
      '상품별로 할인을 별도로 설정 할 수 있음',
    ],
    tabs: [
      {
        tabid: 1,
        name: 'tab1',
        label: '포스시스템',
        type: 'youtube',
        src: 'nkQ4tWMNKus',
        desc: '포스시스템',
      },
    ],
  },
  {
    id: 5,
    title: '마라톤',
    img: '/img/portfolio/list/portfolio_mara.png',
    subtitle: '한마음 통일 마라톤 대회 사이트 개발',
    desc: [
      '참여율 : 전체 작업(100%)',
      '마라톤대회 개인, 단체 신청 및 수정 기능 제공',
      '관리자 페이지 개발',
    ],
    tabs: [
      {
        tabid: 1,
        name: 'tab1',
        label: '마라톤 대회',
        type: 'img',
        src: 'https://www.chungnamilbo.com/news/photo/201404/288792_538_2231.jpg',
        desc: '교육 기관에서 수료 후 처음으로 작업 한 사이트로, 사이트를 통해 2500여명의 접수를 받았고, 접수받는 중 오류가 1건도 발생하지 않았고, 대회가 잘 마무리 되었습니다.',
      },
    ],
  },
  {
    id: 6,
    title: '이러닝',
    img: '/img/portfolio/list/portfolio_elearning.png',
    subtitle: '대학교 이러닝 시스템 개발',
    desc: [
      '참여율 : LMS 솔루션을 대학별로 커스터 마이징 하여 공급',
      '우송대, 중부대, 한남대에 이러닝 시스템 공급',
    ],
    tabs: [
      {
        tabid: 1,
        name: 'tab1',
        label: '이러닝 시스템',
        type: 'img',
        src: '/img/portfolio/detail/elearningView.png',
        desc: '이러닝 시스템',
      },
    ],
  },
]
</script>
<style lang="scss" scoped>
ul,
li {
  padding: 0;
}
ul li {
  list-style: none;
  position: relative;
  padding-left: 20px;
}
ul li::before {
  position: absolute;
  top: 0;
  left: 10px;
  content: '•';
  font-size: 0.5em;
  color: #222;
  margin-right: 0px;
  display: inline-block;
  width: 1em;
}
</style>
