<template>
  <div class="video-player">
    <template v-if="!playingUrl">
      <img :src="thumbnailUrl" @click="onClickVideo(videoUrl)" :style="styleObject" />
      <span class='icon-play' @click="onClickVideo(videoUrl)"></span>
    </template>
    <video
      v-show="playingUrl"
      ref="video"
      :src="playingUrl"
      controls=true
      autoplay=true
      type="video/mp4" />
  </div>
</template>

<script>
const purposeTypes = {
  curriculumOverview: { width: '100%' },
  curriculumStep: { width: '100%', 'border-radius': '8px' }
}

export default {
  name: 'video-player',
  props: {
    purpose: {
      default: 'curriculumOverview',
      validator: function(value) {
        return Object.keys(purposeTypes).indexOf(value) !== -1
      }
    },
    videoUrl: { type: String },
    thumbnailUrl: { type: String }
  },
  data () {
    return {
      playingUrl: null
    }
  },
  computed: {
    styleObject () {
      return purposeTypes[this.purpose]
    }
  },
  methods: {
    onClickVideo (url) {
      this.playingUrl = url
      this.$refs['video'].play()
      this.requestFullScreen()
    },
    requestFullScreen () {
      const elem = this.$refs['video']
      if ( elem.webkitRequestFullScreen ) {
        elem.webkitRequestFullScreen();
        elem.addEventListener('webkitfullscreenchange', this.changeFullScreen)
      }
    },
    changeFullScreen (e) {
      if (document.webkitFullscreenElement === null) {
        this.$refs['video'].pause()
        this.playingUrl = null
      }
    }
  }
}
</script>

<style>
.video-player {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-player {
  position: relative;
}

.video-player .icon-play {
  background: url("/static/img/icons/icon-play.png") no-repeat;
  background-position: center center;
  background-size:contain;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
}
</style>
