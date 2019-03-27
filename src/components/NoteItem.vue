<template>
  <section class="item-box item-note-list">
    <div class="item-box__media">
      <img :src="noteItem.thumbUrl" />
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
}

.item-note-list .item-box__content span.created-date {
  color: #727375;
}

</style>
