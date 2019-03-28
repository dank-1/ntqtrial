<template>
  <section class="screen-box">
    <Header
      title="カリキュラム一覧"
      url="/"
    />
    <main class="screen-box__main curriculum-list">
      <div
        v-for="(curriculum, index) in curriculumList"
        :key="index"
        :style="styleObject( curriculum )"
        class="curriculum-box"
      >
        <p>{{ curriculum.title }}</p>
        <div
          class="curriculum-box__subcontent"
          @click="$router.push(`/curriculum/${index}`)"
        >
          <label class="received">{{ curriculum.receiveDate }}</label>
          <label class="coach-name">{{ curriculum.coachName }}</label>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'CurriculumList',
  components: { Header },
  data () {
    return {
      curriculumList: {},
    }
  },
  created () {
    this.curriculumList = this.mock()
  },
  methods: {
    onClickClose () {
      this.$router.push('/')
    },
    styleObject (curriculum) {
      return {
        background: `url("${curriculum.thubnailUrl}") no-repeat`,
        'background-position': 'center center',
        'background-size': 'contain',
        width: `${window.innerWidth-40}px`,
        height: `${window.innerWidth-40}px`
      }
    },
    mock () {
      return [
        {
          thubnailUrl: "static/img/curriculum1.png",
          title: "基礎練習　パドブレターン（ピルエット）",
          receiveDate: "2018.07.28",
          coachName: "MISAKI先生"
        },
        {
          thubnailUrl: "static/img/curriculum2.png",
          title: "アイソレーション",
          receiveDate: "2018.07.28",
          coachName: "MISAKI先生"
        },
        {
          thubnailUrl: "static/img/curriculum3.png",
          title: "ムーンウォーク① 足の動かし方",
          receiveDate: "2018.07.28",
          coachName: "MISAKI先生"
        },
      ]
    },
  }
}
</script>

<style>
.curriculum-list .curriculum-box {
  background-position: center center;
  background-size:contain;
  margin: auto;
  margin-bottom: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.curriculum-list .curriculum-box p {
  font-size: 24px;
  line-height: 35px;
  padding-left: 16px;
  margin-bottom: 16px;
}
.curriculum-list .curriculum-box .curriculum-box__subcontent {
  font-size: 12px;
  line-height: 20px;
  padding-left: 16px;
}
</style>
