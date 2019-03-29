<template>
  <section class="screen-box">
    <header>
      <span
        class="screen-close"
        @click="onClickClose"
      />
    </header>
    <main>
      <swiper :options="swiperOptions">
        <swiper-slide class="curriculum-overview">
          <video-player
            class="player"
            :video-url="curriculum.videoUrl"
            :thumbnail-url="curriculum.thumbnailUrl" 
          />
          <p class="title">
            {{ curriculum.title }}
          </p>
          <p class="received-date">
            <label>{{ curriculum.receivedDate }}</label>
            <label>{{ curriculum.coachName }}</label>
          </p>
          <div class="description">{{ curriculum.description }}</div>
          <p class="training-time">{{ `練習時間のめやす：${curriculum.trainingHours}時間` }}</p>
        </swiper-slide>
        <curriculum-step
          v-for="(step, index) in curriculum.steps"
          :key="index"
          :data="step"
          :order="index+1"
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
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 30,
        height: window.innerHeight
      }
    }
  },
  methods: {
    onClickClose () {
      this.$router.push('/')
    },
    mock () {
      // provisional
      return {
        id: 1,
        title: '基礎練習　パドブレターン（ピルエット）',
        description: 'パドブレとは足をクロスさせながらリズムを取るステップ。ヒップホップだけでなく、ハウスダンス、ジャズ・ダンス、バレエなど全てのダンスに共通して行われる、ダンスの基礎ステップとなります。動きは各ジャンル共通ですが、踊り方やステップの踏み方には若干違いがあります。\nヒップホップの上達には欠かせないステップとなっていますので、ぜひマスターして下さい。',
        coachName: 'MISAKI先生',
        receivedDate: '2019-03-26',
        trainingHours: '48',
        videoUrl: 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4',
        thumbnailUrl: 'https://dews365.com/wp-content/uploads/2018/06/24071_20180420GENE01.jpg',
        steps: [
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: 'https://www.omorey.com/wp-content/uploads/2016/10/maxresdefault.jpg',
            description: '★膝は出来る限り伸ばした状態で\n★足裏をよく使って行う\n★常にアンドゥ・オールを意識（つま先と膝が外をむくように）',
          },
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: 'https://www.omorey.com/wp-content/uploads/2016/10/maxresdefault.jpg',
            description: '★膝は出来る限り伸ばした状態で\n★足裏をよく使って行う\n★常にアンドゥ・オールを意識（つま先と膝が外をむくように）',
          },
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: 'https://www.omorey.com/wp-content/uploads/2016/10/maxresdefault.jpg',
            description: '★膝は出来る限り伸ばした状態で\n★足裏をよく使って行う\n★常にアンドゥ・オールを意識（つま先と膝が外をむくように）',
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
/* 
.swiper-container {
  width: 100vw;
  background: #fff;
} */

.screen-box {
  color: rgba(22,23,26,1);
  font-family: "Hiragino Sans";
}
.curriculum-overview {
  height: 90vh;
}
.title, .received-date, .description, .training-time {
  margin: 16px 24px 0;
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
  overflow: scroll;
}
.training-time {
  color: #E4327D;
  font-size: 12px;
  line-height: 20px;
}
.player {
  margin-bottom: 16px;
}
</style>
