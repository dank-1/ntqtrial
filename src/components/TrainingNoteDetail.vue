<template lang="pug">
.training-note-detail
  .video-thumbnail
    span(:style="[{'background-image': 'url('+trainingNote.videoUrl+')'}]")
    // icon(name="play" class="icon-play")
</template>

<style>
.training-note-detail {
  position: relative;
  left: 0;
  right: 0;
  margin: 16px;
}
.video-thumbnail {
  position: relative;
  width: 100%;
  padding-top: 100%;

  span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: #ff00ff;
  }
}
</style>

<script>
export default {
  data () {
    return {
      trainingNote: {
        id: 1,
        videoUrl: "http://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
        thumbnailUrl: "https://www.fnordware.com/superpng/pnggrad8rgb.png",
        trainingSeconds: 5400
      }
    }
  }
}
</script>
