<template>
  <section class="screen-box">
    <header>
      <span
        class="screen-close"
        @click="onClickClose"
      />
    </header>
    <main class="screen-box__main">
    </main>
  </section>
</template>

<script>
export default {
  name: 'CurriculumList',
  components: {
  },
  data () {
    return {
      curriculumList: {},
    }
  }
}
</script>

<style>
</style>
