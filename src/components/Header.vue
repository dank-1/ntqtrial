<template>
  <header>
    <div class='header'>
      <span class='icon-back' @click="handleBack( url )"></span>
      <span class='title'> {{ title }} </span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: {
    url: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },

  methods: {
    /**
      * Back Url
      * @param url
      *
      * @function handleBack
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
  background-image: url("/static/img/icons/icon_back.png");
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
