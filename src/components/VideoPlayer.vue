<template>
  <div class="video-player">
    <template v-if="!playingUrl">
      <img :src="thumbnailUrl" @click="onClickVideo(videoUrl)"/>
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
export default {
  name: 'video-player',
  props: {
    videoUrl: { type: String },
    thumbnailUrl: { type: String }
  },
  data () {
    return {
      playingUrl: null
    }
  },
  methods: {
    onClickVideo (url) {
      this.playingUrl = url
      this.$refs['video'].play()
      this.requestFullScreen()
    },
    requestFullScreen() {
      const elem = this.$refs['video']
      if ( elem.webkitRequestFullScreen ) {
        elem.webkitRequestFullScreen();
        elem.addEventListener('webkitfullscreenchange', this.changeFullScreen)
      }
    },
    changeFullScreen(e) {
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

.video-player img, video {
  border-radius: 10px;
  width: 100%;
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
