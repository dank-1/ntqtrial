<template>
  <section class="screen-box">
    <header>
      <span
        class="screen-close"
        @click="onClickClose"
      />
    </header>
    <main>
      <swiper
        :options="swiperOption"
        class="swiper-container"
      >
        <swiper-slide class="swiper-slide">
          <video-player
            class="player"
            :video-url="curriculum.videoUrl"
            :thumbnail-url="curriculum.thumbnailUrl" 
          />
          <p class="title">
            {{ curriculum.title }}
          </p>
          <p class="received-date">
            {{ curriculum.receivedDate }}
          </p>
          <div class="description">{{ curriculum.description }}</div>
        </swiper-slide>
        <curriculum-step
          v-if="recursionStep"
          :data="recursionStep"
          :order="1"
        />
      </swiper>
    </main>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VideoPlayer from '@/components/VideoPlayer.vue'
import CurriculumStep from '@/components/CurriculumStep.vue'

import 'swiper/dist/css/swiper.css'

export default {
  name: 'Curriculum',
  components: {
    swiper,
    swiperSlide,
    VideoPlayer,
    CurriculumStep
  },
  data () {
    return {
      curriculum: {},
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 30,
        nested: true
      }
    }
  },
  computed: {
    recursionStep () {
      const stepNum = this.curriculum.steps.length
      if (stepNum === 0) {
        return []
      }
      return this.decorateStep(stepNum-1)
    }
  },
  methods: {
    decorateStep (stepNum, index=0) {
      var result = {
        videoUrl: this.curriculum.steps[index].videoUrl,
        thumbnailUrl: this.curriculum.steps[index].thumbnailUrl,
        description: this.curriculum.steps[index].description,
      }
      result['step'] = (index !== stepNum)
                       ? this.decorateStep(stepNum, index+1)
                       : null
      return result
    },
    onClickClose () {
      this.$router.push('/')
    },
    mock () {
      // provisional
      return {
        id: 1,
        title: 'title',
        description: 'curriculum description\ncurriculum description',
        receivedDate: '2019-03-26',
        videoUrl: 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4',
        thumbnailUrl: 'https://dews365.com/wp-content/uploads/2018/06/24071_20180420GENE01.jpg',
        steps: [
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: 'https://www.omorey.com/wp-content/uploads/2016/10/maxresdefault.jpg',
            description: 'step description\nstep description',
          },
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: 'https://www.omorey.com/wp-content/uploads/2016/10/maxresdefault.jpg',
            description: 'step description\nstep description',
          },
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: 'https://www.omorey.com/wp-content/uploads/2016/10/maxresdefault.jpg',
            description: 'step description\nstep description',
          }
        ]
      }
    }
  },
  created () {
    // ToDo call api curriculum detail
    // curriculumId = this.$route.params.curriculumId
    this.curriculum = this.mock()
  }
}
</script>

<style>
header .screen-close {
  background: url("/static/img/icons/icon-close.png") no-repeat;
  background-position: center center;
  background-size:contain;
  position: absolute;
  left: 16px;
  top: 12px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 100;
}

.swiper-container {
  width: 100vw;
  background: #fff;
}

.screen-box {
  color: rgba(22,23,26,1);
  font-family: "Hiragino Sans";
}

.title, .received-date, .description {
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 16px;
}

.title {
  font-size: 24px;
  line-height: 35px;
}
.received-date {
  font-size: 12px;
  line-height: 20px;
}
.description {
  white-space: pre-wrap;
  word-wrap:break-word;
  font-size: 14px;
  line-height: 24px;
}

.player {
  margin-bottom: 16px;
}
</style>
