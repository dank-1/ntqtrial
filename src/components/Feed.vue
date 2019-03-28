<template>
  <section class="screen-box">
    <feed-header title="リーフォーマッ"></feed-header>
    <transition name="fade">
      <div class="box-notice" v-if="!isNoticeConfirmed">
        <div class="box-notice__inner clearfix">
          <div class="box-notice__left">
            <p>まもなくLIVE面談が始まります！</p>
            <p>{{ noticeTime }}</p>
          </div>
          <div class="box-notice__right clearfix">
            <button @click="onNoticeConfirm">入室する</button>
          </div>
        </div>
      </div>
    </transition>
    <main class="screen-box__main">
      <section class="feed__section feed__section-curriculum">
        <header>
          <h3>カリキュラム</h3>
          <a href="#" @click.prevent="goScreen( 'curriculum-list' )">すべて</a>
        </header>
        <main>
          <div class="current-curriculum">
            <img :src="currentCurriculum.thumbUrl">
            <div class="current-curriculum__desc">
              <div class="current-curriculum__desc__title">{{ currentCurriculum.title }}</div>
              <div class="current-curriculum__desc__meta">
                <span>{{ currentCurriculum.date }}</span>
                <span>{{ currentCurriculum.coachName }}</span>
              </div>
            </div>
            <div class="background-modal"></div>
          </div>
          <ul class="curriculum-list">
            <li class="curriculum-list__item" v-for="curriculum in curriculumList">
              <img :src="curriculum.thumbUrl">
              <div class="curriculum-list__item__title">{{ curriculum.title }}</div>
              <div class="background-modal"></div>
            </li>
          </ul>
        </main>
      </section>

      <section class="feed__section feed__section-note">
        <header>
          <h3>練習ノート</h3>
          <a href="#" @click.prevent="goScreen( 'note-list' )">すべて</a>
        </header>
        <main>
          <div class="note-list">
            <template v-for="itemNoteList in noteList">
              <note-item :noteItem="itemNoteList"></note-item>
            </template>
          </div>
        </main>
      </section>
    </main>
  </section>
</template>

<script>
import { mapState } from "vuex";
import FeedHeader from "./FeedHeader.vue";
import NoteItem from "./NoteItem.vue";

export default {
  name: "note-list",
  data () {
    return {
      noticeTime: '4月2日 15:30〜16:30',
      isNoticeConfirmed: false
    }
  },
  components: {
    FeedHeader,
    NoteItem
  },
  mounted () {
    this.$store.dispatch( 'getNoteList' )
  },
  computed: {
    currentCurriculum: function () {
      return this.$store.state.curriculumList[0]
    },
    curriculumList: function () {
      return this.$store.state.curriculumList.slice(1)
    },
    ...mapState( ["noteList"] )
  },
  methods: {
    goScreen: function (screen) {

    },
    onNoticeConfirm: function () {
      this.isNoticeConfirmed = true;
    }
  }
};
</script>

<style>
  .box-notice {
    background: #E4327D;
    padding: 10px 16px;
    color: #fff;
    font-size: 14px;
    line-height: 23px;
    font-weight: 600;
  }

  .box-notice__left {
    float: left;
    width: 62%;
  }

  .box-notice__right {
    float: right;
    width: 38%;
  }

  .box-notice__right button {
    background: #fff;
    color: #E4327D;
    border-radius: 20px;
    padding: 10px 16px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    float: right;
    margin-top: 4px;
    box-shadow: 0px 0px 5px 1px #999;
    -moz-box-shadow: 0px 0px 5px 1px #999;
    -webkit-box-shadow: 0px 0px 5px 1px #999;
  }

  .feed__section header {
    position: relative;
    margin: 5px 0 25px 0;
    padding: 0 8px;
  }

  .feed__section h3 {
    font-size: 24px;
    font-weight: 600;
  }

  .feed__section a {
    position: absolute;
    right: 0;
    top: 5px;
    color: #E4327D;
    font-weight: 300;
    text-decoration: none;
  }

  .current-curriculum {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .current-curriculum img {
    width: 100%;
    display: block;
  }

  .background-modal {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    border-radius: 8px;
  }

  .current-curriculum__desc {
    position: absolute;
    left: 0;
    bottom: 30px;
    color: #fff;
    z-index: 1;
    padding: 0 24px;
    width: 100%;
    box-sizing: border-box;
  }

  .current-curriculum__desc__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .current-curriculum__desc__meta {
    font-size: 12px;
  }

  .current-curriculum__desc__meta span {
    margin-right: 12px;
  }

  .curriculum-list {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .curriculum-list__item {
    display: inline-block;
    margin: 0 10px 0 0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    width: 200px;
  }

  .curriculum-list__item:last-child {
    margin: 0;
  }

  .curriculum-list__item img {
    width: 100%;
    display: block;
  }

  .curriculum-list__item__title {
    color: #fff;
    position: absolute;
    font-size: 16px;
    font-weight: 600;
    left: 0;
    bottom: 25px;
    z-index: 1;
    padding: 0 16px;
    width: 100%;
    box-sizing: border-box;
  }

  .feed__section-curriculum {
    margin-bottom: 45px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    -webkit-transition: opacity .5s;
    -moz-transition: opacity .5s;
    -o-transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
