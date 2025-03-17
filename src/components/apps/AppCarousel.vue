<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="white"
    navigation
    arrows
    :autoplay="true"
    class="carousel bg-primary text-white shadow-1 rounded-borders"
  >
    <q-carousel-slide name="style" class="slider01 column no-wrap flex-center q-pa-none">
      <div class="slider01Ok">
        <div class="slider01OkBg">
          <div class="wrapText">
            <div class="textOk">
              <div>웹기획 Ok</div>
              <div>웹디자인 Ok</div>
              <div>웹개발 Ok</div>
            </div>
            <div class="textOnestop">
              <div class="textOnestop01">
                <div>One-Stop</div>
                <div>서비스</div>
              </div>
              <div class="textOnestop02">
                <div>어떤 유형의 사이트도</div>
                <div>완벽하게!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <!-- <q-carousel-slide name="tv" class="column no-wrap flex-center">
      <q-icon name="live_tv" size="56px" />
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide> -->
  </q-carousel>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      slide: ref('style'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    }
  },
}
</script>
<style setup>
.slider01 {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('src/assets/img/sliders/slider01_bg.png') no-repeat center bottom;
  background-size: cover;
}
.carousel {
  height: 800px;
}
.slider01Ok {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  background: url('src/assets/img/sliders/slider01_ok.png') no-repeat center bottom;
  background-size: contain;
}
.slider01OkBg {
  width: 100%;
  height: 100%;
}
.wrapText {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapText .textOk {
  font-size: 50px;
  padding-right: 180px;
}
.wrapText .textOnestop {
  padding-left: 200px;
}
.wrapText .textOnestop .textOnestop01 {
  font-size: 50px;
}
.wrapText .textOnestop .textOnestop02 {
  font-size: 20px;
}

@media (max-width: 920px) {
  .carousel,
  .slider01Ok {
    height: 500px;
  }

  .wrapText .textOk {
    font-size: 40px;
    padding-right: 120px;
  }
  .wrapText .textOnestop {
    padding-left: 120px;
  }
  .wrapText .textOnestop .textOnestop01 {
    font-size: 40px;
  }
}

@media (max-width: 700px) {
  .carousel,
  .slider01Ok {
    height: 400px;
  }

  .wrapText {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }
  .wrapText .textOk {
    font-size: 30px;
    padding-left: 50px;
  }
  .wrapText .textOnestop {
    padding-left: 50px;
  }
  .wrapText .textOnestop .textOnestop01 {
    font-size: 30px;
  }
  .wrapText .textOnestop .textOnestop02 {
    font-size: 20px;
  }
}

@media (max-width: 700px) {
  .carousel,
  .slider01Ok {
    height: 300px;
  }

  .wrapText {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
  }
  .wrapText .textOk {
    font-size: 20px;
    padding-left: 50px;
  }
  .wrapText .textOnestop {
    padding-left: 0px;
  }
  .wrapText .textOnestop .textOnestop01 {
    font-size: 20px;
  }
  .wrapText .textOnestop .textOnestop02 {
    font-size: 15px;
  }
}

@media (max-width: 500px) {
  .carousel,
  .slider01Ok {
    height: 200px;
  }

  .wrapText {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
  }
  .wrapText .textOk {
    font-size: 15px;
    padding: 5px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2);
  }
  .wrapText .textOnestop {
    display: none;
  }
}
</style>
