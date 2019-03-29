<template>
  <section class="screen-box screen-note-create">
    <Header title="新規投稿"></Header>
    <main>
      <div class="video-section">
        <div class="video-section__inner">
          <div class="video-section__choose" v-if="!form.video" @click="onAddVideo">
            <img src="/static/img/icons/library.png" />
            <span>動画を選択</span>
          </div>
          <div class="video-section__preview" v-if="form.video">
            <video width="100%" height="100%" controls>
              <source :src="videoUrl" type="video/mp4">
            </video>
          </div>
          <input type="file" class="video-section__file" ref="file" @change="onChooseVideo" />
        </div>
      </div>
      <div class="memo-section">
        <textarea placeholder="コメントを入力" v-model="form.memo"></textarea>
      </div>
      <div class="time-section">
        <label>
          <span class="time-section__label">練習時間</span>
          <span class="time-section__input">
            <input type="number" v-model="form.minutes" />
            <span>分</span>
          </span>
        </label>
      </div>
      <div class="submit-section">
        <div class="submit-section__button">
          <button @click="onSubmit">投稿する</button>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
  import Header from './Header.vue'

  export default {
    name: 'note-create',
    data () {
      return {
        form: {
          video: null,
          memo: null,
          minutes: 0
        }
      }
    },
    components: {
      Header
    },
    methods: {
      onAddVideo: function () {
        this.$refs.file.click()
      },
      onChooseVideo: function () {
        let video = this.$refs.file.files[0];

        if (video.type === 'video/mp4') {
          this.form.video = video
        }
      },
      onSubmit: function () {
        this.$store.commit( 'updateFloatScreen', '' )
      }
    },
    computed: {
      videoUrl: function () {
        return window.URL.createObjectURL(this.form.video)
      }
    }
  }
</script>

<style>

  .screen-note-create {
    background: #fff;
  }

  .video-section {
    padding: 20px;
    border-bottom: 1px solid #d0d1d1;
  }

  .video-section__inner > * {
    width: 335px;
    height: 335px;
    margin: 0 auto;
    max-width: 100%;
  }

  .video-section__choose {
    border: 1px solid #d0d1d1;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
  }

  .video-section__choose img {
    width: 22px;
    display: block;
    position: absolute;
    top: 140px;
    left: 50%;
    margin-left: -11px;
  }

  .video-section__choose span {
    font-size: 15px;
    font-weight: 600;
    color: #16171A;
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 174px;
    opacity: 0.6;
  }

  .memo-section {
    border-bottom: 1px solid #d0d1d1;
  }

  .memo-section textarea {
    display: block;
    width: 100%;
    height: 145px;
    box-sizing: border-box;
    padding: 16px;
    border: none;
    outline: none;
    resize: none;
  }

  .time-section {
    border-bottom: 1px solid #d0d1d1;
  }

  .time-section label {
    display: block;
    padding: 16px 20px;
    overflow: hidden;
  }

  .time-section__label {
    float: left;
    font-size: 12px;
    font-weight: 600;
    opacity: 0.4;
    line-height: 20px;
  }

  .time-section__input {
    display: block;
    float: right;
  }

  .time-section__input input {
    border: none;
    text-align: right;
    color: #16171A;
    opacity: 0.4;
    font-size: 20px;
    font-weight: 300;
    outline: 0;
    width: 100px;
  }

  .time-section__input input::-webkit-outer-spin-button,
  .time-section__input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .time-section__input span {
    font-size: 18px;
    color: #16171A;
    opacity: 0.9;
    font-weight: 600;
    margin-left: 3px;
  }

  .video-section__file {
    display: none;
  }

  .submit-section {
    padding: 40px 24px 24px 24px;
  }

  .submit-section__button button {
    border-radius: 8px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    height: 50px;
    width: 100%;
    background: #e4327d;
  }

</style>
