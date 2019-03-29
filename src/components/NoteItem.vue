<template>
  <section class="note-box item-note-list">
    <div class="note-box__media">
      <img :src="noteItem.thumbUrl" />
    </div>
    <div class="note-box__content">
      <div class="note-box__content__description" v-html="noteItem.memo"></div>
      <span class="note-box__content__date"> {{ noteItem.date }}</span>
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

  .item-note-list .note-box__content .description {
    margin: 20px auto;
  }

  .item-note-list .note-box__content span.created-date {
    color: #727375;
  }

  .note-box {
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 0px 5px 1px #eaeaea;
    -moz-box-shadow: 0px 0px 5px 1px #eaeaea;
    -webkit-box-shadow: 0px 0px 5px 1px #eaeaea;
    margin-bottom: 16px;
  }

  .note-box:last-child {
    margin-bottom: 0;
  }

  .note-box__media img {
    width:100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .note-box__content {
    padding: 16px;
  }

  .note-box__content__description {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5;
  }

  .note-box__content__date {
    font-weight: 300;
    font-size: 12px;
    margin-top: 8px;
    display: block;
  }

</style>
