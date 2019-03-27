<template>
  <section class="screen-box">
    <Header title="リーフォーマッ" url="http://dantri.com.vn"></Header>
    <div class="box-notice">
      <p>状況に合わせて考えた練習メニュ</p>
      <p>状況に合わせて考えた練習メニュ</p>
      <p>状況に合わせて考えた練習メニュ</p>
    </div>
    <div class="activity-feed">
      <div class="header-feed">
        <span class="title">状況に合わ</span>
        <a class="link" href="#">メニュ</a>
      </div>

      <div class="main-feed">
        <img src="static/img/student.jpg" alt>
        <div class="name-feed">
          <p>状況に合わせて考えた練習メニュ</p>
        </div>
        <div class="date-feed">
          <p>2018.07.07</p>
        </div>
      </div>
      <div class="list-feed">
        <div class="horizontal-scroll-wrapper squares">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
        </div>
        <div class="item-feed">
          <img src="static/img/student.jpg" alt>
          <div class="name-feed">
            <p>状況に合わせて考え</p>
          </div>
        </div>

        <div class="item-feed">
          <img src="static/img/student.jpg" alt>
          <div class="name-feed">
            <p>状況に合わせて考え</p>
          </div>
        </div>
      </div>
    </div>
    <div class="note-item-header">
      <span class="title">状況に合わ</span>
      <a class="link" href="#">メニュ</a>
    </div>
    <main class="screen-box__main">
      <template v-for="itemNoteList in noteList">
        <note-item :noteItem="itemNoteList"></note-item>
      </template>
    </main>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Header from "./Header.vue";
import NoteItem from "./NoteItem.vue";

export default {
  name: "note-list",
  data() {
    return {};
  },
  components: {
    Header,
    NoteItem
  },

  computed: mapState(["noteList"])
};
</script>

<style>
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}

::-webkit-scrollbar-button {
  width: 1px;
  height: 1px;
}

div {
  box-sizing: border-box;
}

.horizontal-scroll-wrapper {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: calc(250px + 1px);
  max-height: 750px;
  margin: 0;
  padding-top: 1px;
  background: #abc;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-transform: rotate(-90deg) translateY(-250px);
  transform: rotate(-90deg) translateY(-250px);
  -webkit-transform-origin: right top;
  transform-origin: right top;
}
.horizontal-scroll-wrapper > div {
  display: block;
  padding: 5px;
  background: #cab;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: right top;
  transform-origin: right top;
}

.squares {
  padding: 250px 0 0 0;
}
.squares > div {
  width: 250px;
  height: 250px;
  margin: 10px 0;
}

.item-box:first {
  margin-top: 0px;
}
.box-notice {
  width: 100%;
  margin-top: 20px;
  background: #e4327d;
  color: white;
  padding: 20px;
  font-weight: 400;
}
.activity-feed {
  width: 90%;
  margin: 10px auto;
}
.activity-feed .header-feed {
  width: 100%;
  float: left;
  height: 50px;
}
.activity-feed .header-feed span.title {
  display: block;
  float: left;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 16px;
}

.activity-feed .header-feed a.link {
  display: block;
  float: right;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #e4327d;
  text-decoration: none;
}

.note-item-header {
  width: 90%;
  margin: 20px auto;
  height: 50px;
}

.note-item-header span.title {
  display: block;
  float: left;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 16px;
}

.note-item-header a.link {
  display: block;
  float: right;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #e4327d;
  text-decoration: none;
}

.activity-feed .main-feed {
  width: 100%;
  margin: 10px auto;
  border-radius: 10px;
  position: relative;
}

.activity-feed .main-feed img {
  width: 100%;
  border-radius: 10px;
  height: 300px;
}
.activity-feed .main-feed .name-feed {
  position: absolute;
  left: 10%;
  bottom: 20%;
  color: white;
  font-weight: bold;
  font-size: 18px;
}
.activity-feed .main-feed .date-feed {
  position: absolute;
  left: 10%;
  bottom: 10%;
  color: white;
  font-size: 14px;
}
.activity-feed .list-feed {
  width: 100%;
  float: left;
}
.activity-feed .list-feed .item-feed {
  position: relative;
  width: 220px;
  height: 100px;
  border-radius: 10px;
  float: left;
  margin-right: 20px;
}

.activity-feed .item-feed img {
  width: 220px;
  height: 100px;
  border-radius: 10px;
  float: left;
}
.activity-feed .item-feed .name-feed {
  position: absolute;
  font-size: 14px;
  color: white;
  font-weight: bold;
  top: 40%;
  left: 10%;
}
</style>
