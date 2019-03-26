<template>
  <section class="screen-box">
    <header>
      <div class='header'>
        <span class='icon-back' @click="handleBack('dantri.com.vn')"></span>
        <span class='title'> リーフォーマッ </span>
      </div>
    </header>
    <main>
      <section class="item-box item-note-list" v-for="itemNoteList in noteList">
        <div class="item-box__media">
          <img v-bind:src="itemNoteList.image" v-bind:alt="itemNoteList.title" />
        </div>
        <div class="item-box__content">
          <span class='title'> {{ itemNoteList.title }}</span>
          <div class='description'>
             {{ itemNoteList.description }}
          </div>
          <span class='created-date'> {{ itemNoteList.createDate }}</span>
        </div>
      </section>

      <button class='submit-note-list'>練習ノート</button>
    </main>
  </section>
</template>

<script>
// import Header from '@./Header'
export default {
  name: 'NoteList',
  data () {
    return {
        noteList: [
          { title: 'カリキュラムタイトル', image: './static/img/student.jpg', description: 'フリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキスト', createDate: '2018.02.10' },
          { title: 'カリキュラムタイトル', image: './static/img/student.jpg', description: 'フリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキスト', createDate: '2018.02.10' },
          { title: 'カリキュラムタイトル', image: './static/img/student.jpg', description: 'フリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキスト', createDate: '2018.02.10' },
          { title: 'カリキュラムタイトル', image: './static/img/student.jpg', description: 'フリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキストフリーフォーマットでのテキスト', createDate: '2018.02.10' },
      ]
    }
  },

  methods: {
    /**
      * Back Url
      * @param url
      *
      * @function toggleSelect
      */

    handleBack(url) {
        this.$router.push(url);
    },
  }
}
</script>

<style>
.header {
  width: 90%;
  margin:5px auto;
  margin-top:20px;
  height: 30px;
}
.header .icon-back{
  background-image: '/static/img/icons/icon_back.png';
  background:red;
  width:10%;
  height:30px;
  display:block;
  float: left;
}

.header .title {
  width:80%;
  height:30px;
  display:block;
  float: left;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
}

.item-note-list{
  width: 90%;
  margin:20px auto;
  font-size: 14px;
}

.item-note-list{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 0px 5px 1px #eaeaea;
  -moz-box-shadow: 0px 0px 5px 1px #eaeaea;
  -webkit-box-shadow: 0px 0px 5px 1px #eaeaea;
}

.item-note-list .item-box__media img {
  width:100%;
  height:180px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.item-note-list .item-box__content span.title {
  display:inline-block;
  background: #c5d219;
  border-radius: 5px;
  padding:4px;
  color: black;
  font-weight: bold;
}

.item-note-list .item-box__content .description {
  margin: 20px auto;
  color: black;
}

.item-note-list .item-box__content span.created-date {
  color: #727375;
}

.submit-note-list {
    width:80%;
    margin: 10px auto;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #fff;
    background-color: #e4327d;
    border-color: #d43f3a;
}

</style>
