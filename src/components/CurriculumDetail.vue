<template>
  <div class="curriculum-detail">
    <p>{{ curriculum.title }}</p>
    <p>{{ curriculum.receivedDate }}</p>
    <div class="overview">
      <video :src="curriculum.videoUrl" @click="onClickVideo"></video>
      <div class="description">{{ curriculum.description }}</div>
    </div>
    <div class="steps">
      <div class="step" v-for="(step, key) in curriculum.steps" :key="key">
        <label class="step-label">STEP {{ key+1 }}</label>
        <div v-if="step.videoUrl">
          <video :src="step.videoUrl" @click="onClickVideo"></video>
        </div>
        <div class="description" v-if="step.description">{{ step.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'curriculum_detail',
  data () {
    return {
      curriculum: {}
    }
  },
  methods: {
    onClickVideo (event) {
      const video = event.target
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    },
    mock () {
      // provisional
      return {
        id: 1,
        title: 'title',
        description: 'curriculum description\ncurriculum description',
        receivedDate: '2019-03-26',
        videoUrl: 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4',
        thumbnailUrl: '',
        steps: [
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: '',
            description: 'step description\nstep description',
          },
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: '',
            description: 'step description\nstep description',
          },
          {
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            thumbnailUrl: '',
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
.overview, .step {
  margin-bottom: 16px;
}

.description {
  white-space: pre-wrap;
  word-wrap:break-word;
}

video {
  width: 80%;
  border-radius: 10px;
}
</style>
