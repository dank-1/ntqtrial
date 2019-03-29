<template>
  <header>
    <div class="feed-header">
      <h1>{{ title }}</h1>
      <div class="feed-header__avatar">
        <img :src="avatarUrl" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'feed-header',
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  methods: {

  },
  data () {
    return {
      avatarUrl: this.$store.state.profile.avatarUrl
    }
  }
}
</script>

<style>
  .feed-header {
    background: #fff;
    position: relative;
  }

  .feed-header h1 {
    font-size: 16px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
  }

  .feed-header__avatar {
    position: absolute;
    left: 16px;
    top: 50%;
    margin-top: -16px;
  }

  .feed-header__avatar img {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 32px;
  }

</style>
