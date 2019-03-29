<template>
  <section class="screen-box">
    <Header
      title="カリキュラム一覧"
      url="/"
    />
    <main class="screen-box__main curriculum-list">
      <div
        v-for="curriculum in curriculumList"
        :key="curriculum.id"
        :style="styleObject( curriculum )"
        class="curriculum-box"
        @click="onClickCurriculum(curriculum.id)"
      >
        <p>{{ curriculum.title }}</p>
        <div class="curriculum-box__subcontent">
          <label class="received">{{ curriculum.receiveDate }}</label>
          <label class="coach-name">{{ curriculum.coachName }}</label>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Header from './Header.vue'

const SIDE_MARGIN = 20

export default {
  name: 'CurriculumList',
  components: { Header },
  data () {
    return {
      curriculumList: {},
    }
  },
  computed: {
    curriculumThumbnailSize () {
      return window.innerWidth-SIDE_MARGIN*2
    }
  },
  created () {
    this.curriculumList = this.mock()
  },
  methods: {
    onClickClose () {
      this.$router.push('/')
    },
    onClickCurriculum(id) {
      this.$router.push({name: 'curriculum', params: { curriculumId: id } })
    },
    styleObject (curriculum) {
      return {
        background: `url("${curriculum.thumbnailUrl}") no-repeat`,
        'background-position': 'center center',
        'background-size': 'contain',
        width: `${this.curriculumThumbnailSize}px`,
        height: `${this.curriculumThumbnailSize}px`
      }
    },
    mock () {
      return [
        {
          id: 1,
          thumbnailUrl: "static/img/curriculum1.png",
          title: "基礎練習　パドブレターン（ピルエット）",
          receiveDate: "2018.07.28",
          coachName: "MISAKI先生"
        },
        {
          id: 2,
          thumbnailUrl: "static/img/curriculum2.png",
          title: "アイソレーション",
          receiveDate: "2018.07.28",
          coachName: "MISAKI先生"
        },
        {
          id: 3,
          thumbnailUrl: "static/img/curriculum3.png",
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
