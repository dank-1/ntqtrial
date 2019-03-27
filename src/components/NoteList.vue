<template>
  <section class="screen-box">
    <header-note title="リーフォーマッ" url="http://dantri.com.vn"></header-note>
    <main>
      <template v-for="itemNoteList in noteList">
        <note-item :noteItem="itemNoteList"></note-item>
      </template>
      <button class='submit-note-list'>練習ノート</button>
    </main>
  </section>
</template>

<script>
export default {
  name: 'note-list',
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
}
</script>

<style>
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
  position: fixed;
  overflow: hidden;
  z-index: 2400;
  right: 35px;
  bottom: 50px !important;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

</style>
