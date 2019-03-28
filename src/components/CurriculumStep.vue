<template>
  <swiper :options="swiperOption" class="swiper-container" :style="zIndex">
    <swiper-slide class="swiper-slide curriculum-step">
      <p class="title">STEP {{ order }}</p>
      <video-player
        class="player"
        purpose="curriculumStep"
        :videoUrl="data.videoUrl"
        :thumbnailUrl="data.thumbnailUrl"/>
      <div class="description" v-if="data.description">{{ data.description }}</div>
    </swiper-slide>
    <curriculum-step v-if="data.step" :data="data.step" :order="order+1"></curriculum-step>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '@/components/VideoPlayer.vue'
import CurriculumStep from '@/components/CurriculumStep.vue'

export default {
  name: 'curriculum-step',
  props: {
    data: { type: Object },
    order: { type: Number },
    swiperOption: { type: Object }
  },
  components: {
    swiper,
    swiperSlide,
    VideoPlayer,
    CurriculumStep
  },
  computed: {
    zIndex () {
      return { 'z-index': this.order+1 }
    }
  }
}
</script>

<style>
.curriculum-step {
  border-radius: 16px 16px 0 0 / 16px 16px 0 0;
  box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.10);
  color: #16171A;
  padding-top: 24px;
}

.curriculum-step .title {
  text-align: center;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 24px;
}

.curriculum-step .player, .curriculum-step .description {
  margin-left: 16px;
  margin-right: 16px;
}
</style>
