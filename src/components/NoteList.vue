<template>
  <section class="screen-box">
    <Header title="リーフォーマッ" url="http://dantri.com.vn"></Header>
    <main class="screen-box__main">
      <template v-for="itemNoteList in noteList">
        <note-item :noteItem="itemNoteList"></note-item>
      </template>
      <div class="create-note">
        <button class="create-note__btn">練習ノート</button>
      </div>
    </main>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import Header from './Header.vue';
  import NoteItem from './NoteItem.vue';

  export default {
    name: 'note-list',
    data () {
      return {

      }
    },
    components: {
      Header,
      NoteItem
    },
    mounted () {
      this.$store.dispatch('getNoteList');
    },
    computed: mapState([
      'noteList'
    ])
  }
</script>

<style>
  .create-note {
    position: fixed;
    bottom: 30px;
    text-align: center;
    z-index: 2400;
    width: 100%;
  }

  .create-note__btn {
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
    border: 1px solid #d43f3a;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #fff;
    background-color: #e4327d;
    overflow: hidden;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    height: 40px;
    line-height: 40px;
  }

</style>
