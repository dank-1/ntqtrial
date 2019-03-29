<template lang="pug">
section(class="screen-box")
  Header(:title="trainingNote.receivedDate" url="/")
  main(class="screen-box__main")
    .training-note-detail__video-thumbnail
      span(class="training-note-detail__video-thumbnail__span" :style="[{'background-image': 'url('+trainingNote.thumbnailUrl+')'}]")
      // icon(name="play" class="icon-play")
    p(class="training-note-detail__description") {{trainingNote.description}}
    p(class="training-note-detail__received_date") {{trainingNote.receivedDate}}
</template>

<style>
.screen-box__main {
  padding: 16px;
}
.training-note-detail__video-thumbnail {
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  margin: 0 16px 0 16px;
  padding-top: 100%;
  border-radius: 12px;
}
.training-note-detail__video-thumbnail__span {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 12px;
  background-size: cover;
  background-repeat: no-repeat;
}
p {
  position: absolute;
  white-space: pre-wrap;
  word-wrap:break-word;
}
.training-note-detail__description {
}
.training-note-detail__received_date {
}
</style>

<script>
import Header from './Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      trainingNote: {
        id: 1,
        videoUrl: 'http://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
        thumbnailUrl: 'https://www.fnordware.com/superpng/pnggrad8rgb.png',
        trainingSeconds: 5400,
        description: `昨日先生から指摘頂いた
①キックのときに軸足がブレないようにする
②ダウンをもう少し深くする
の2点を意識して練習しました。

ストレッチもしっかりと継続してます(^_^)

明日は振り付けの後半部分を重点的に練習します！`,
        receivedDate: '2019.03.01'
      }
    }
  }
}
</script>
