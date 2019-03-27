<template>
  <section class="item-box item-note-list">
    <div class="item-box__media">
      <img v-bind:src="noteItem.thumbUrl" />
    </div>
    <div class="item-box__content">
      <span class='title'>カリキュラムタイトル</span>
      <div class='description' v-html="noteItem.memo"></div>
      <span class='created-date'> {{ noteItem.date }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'note-item',
  props: {
    noteItem: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style>

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

</style>
