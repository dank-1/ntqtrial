<template>
  <header>
    <div class='header'>
      <span class='icon-back' @click="goScreen( screen )"></span>
      <span class='title'> {{ title }} </span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: {
    screen: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    goScreen( screen ) {
      this.$store.commit('goScreen', screen)
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
  background: url("/static/img/icons/icon_back.png") no-repeat;
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

</style>
