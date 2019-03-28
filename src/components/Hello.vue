<template>
  <section class="screen-box">
    <div>{{ msg }}</div>
    <button @click="goScreen('note-list')">Note List</button>
    <button @click="goScreen('note-list-test')">Note List Test</button>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    goScreen: function ( screen ) {
      this.$store.dispatch( 'goScreen', screen )
    }
  }
}
</script>
