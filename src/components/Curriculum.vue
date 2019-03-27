<template>
  <section class="screen-box">
    <div class="overview">
      <video-player
        class="player"
        :videoUrl="curriculum.videoUrl"
        :thumbnailUrl="curriculum.thumbnailUrl"/>
      <p class="title">{{ curriculum.title }}</p>
      <p class="received-date">{{ curriculum.receivedDate }}</p>
      <div class="description">{{ curriculum.description }}</div>
    </div>
    <curriculum-step v-if="recursionStep" :data="recursionStep" :order=1></curriculum-step>
  </section>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
import CurriculumStep from '@/components/CurriculumStep.vue'

export default {
  name: 'curriculum',
  components: { VideoPlayer, CurriculumStep },
  data () {
    return {
      curriculum: {}
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
html, body, #app, main, .screen-box {
  height: 100%;
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

.overview, .step {
  margin-bottom: 24px;
}

.player {
  margin-bottom: 16px;
}


</style>
