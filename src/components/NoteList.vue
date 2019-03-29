<template>
  <section class="screen-box note-list-screen">
    <Header title="リーフォーマッ"></Header>
    <main class="screen-box__main">
      <template v-for="itemNoteList in noteList">
        <note-item :noteItem="itemNoteList"></note-item>
      </template>
      <div class="create-note">
        <div class="create-note__button">
          <button @click="onGoNoteCreate">練習ノート</button>
        </div>
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

    },
    computed: mapState([
      'noteList'
    ]),
    methods: {
      onGoNoteCreate: function () {
        this.$store.commit( 'updateFloatScreen', 'note-create' )
      }
    }
  }
</script>

<style>
  .create-note {
    position: fixed;
    bottom: 24px;
    left: 100%;
    padding: 0 24px;
    z-index: 2400;
    width: 100%;
    box-sizing: border-box;
  }

  .create-note__button button {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    background: #e4327d;
    border: none;
    height: 50px;
    border-radius: 8px;
    width: 100%;
  }

</style>
