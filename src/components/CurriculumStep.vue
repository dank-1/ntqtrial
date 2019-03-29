<template>
  <swiper-slide class="curriculum-step">
    <p class="title">
      {{ `STEP ${order}` }}
    </p>
    <video-player
      class="player"
      purpose="curriculumStep"
      :video-url="data.videoUrl"
      :thumbnail-url="data.thumbnailUrl"
    />
    <div
      v-if="data.description"
      class="description"
    >{{ data.description }}</div>
  </swiper-slide>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'CurriculumStep',
  components: {
    swiperSlide,
    VideoPlayer
  },
  props: {
    data: { type: Object, default: null },
    order: { type: Number, default: 1 }
  }
}
</script>

<style>
.curriculum-step {
  border-radius: 16px 16px 0 0 / 16px 16px 0 0;
  box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.10);
  color: #16171A;
  height: 90vh;
}
.curriculum-step:last-child {
  height: 100vh;
}
.curriculum-step .title {
  text-align: center;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 24px;
}

.curriculum-step .player {
  margin: 0 16px;
}
</style>
