<template>
  <div class='header'>
    <span class='icon-back' @click="handleBack('dantri.com.vn')"></span>
    <span class='title'> リーフォーマッ </span>
  </div>
</template>

<script>
export default {
  name: 'header',
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

</style>
