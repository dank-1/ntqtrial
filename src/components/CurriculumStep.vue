<template>
  <div class="item-box">
    <p class="title">STEP {{ order }}</p>
    <video-player
      class="player"
      :videoUrl="data.videoUrl"
      :thumbnailUrl="data.thumbnailUrl"/>
    <div class="description" v-if="data.description">{{ data.description }}</div>
    <curriculum-step v-if="data.step" :data="data.step" :order="order+1"></curriculum-step>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
import CurriculumStep from '@/components/CurriculumStep.vue'

export default {
  name: 'curriculum-step',
  props: {
    data: { type: Object },
    order: { type: Number }
  },
  components: {
    VideoPlayer,
    CurriculumStep
  }
}
</script>

<style>
.item-box {
  border-radius: 16px 16px 0 0 / 16px 16px 0 0;
  box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.10);
  color: #16171A;
  padding-top: 24px;
}

.item-box .title {
  text-align: center;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 24px;
}

.item-box .player, .item-box .description {
  margin-left: 16px;
  margin-right: 16px;
}
</style>
