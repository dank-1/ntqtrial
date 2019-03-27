<template>
  <div class="video-player">
    <template v-if="!playingUrl">
      <img :src="thumbnailUrl" @click="onClickVideo(videoUrl)"/>
      <span class='icon-play' @click="onClickVideo(videoUrl)"></span>
    </template>
    <template v-if="playingUrl">
      <video
        ref="video"
        :src="playingUrl"
        controls=true
        autoplay=true
        playsinline=true
        webkit-playsinline=true
        type="video/mp4" />
    </template>
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
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: palevioletred;
  color: #fff;
  width: 64px;
  height: 64px;
}
.video-player .icon-play::before {
  content: '▶';
}
</style>
