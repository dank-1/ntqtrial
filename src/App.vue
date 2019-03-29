<template>
  <div id="app">
    <section id="main">
      <section id="main-inner" :class="swipeClass">
        <feed></feed>
        <template v-for="screen in animation.screens">
          <component :is="screen.name" :class="[`position-${screen.position}`, { 'screen--active' : $store.state.currentScreenActive == screen.name }, 'side-screen']"></component>
        </template>
      </section>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NoteList from './components/NoteList.vue'
  import Feed from './components/Feed.vue'
  import animation from './animation'

  export default {
    name: 'App',
    components: {
      NoteList,
      Feed
    },
    data () {
      return {
        animation
      }
    },
    computed: {
      swipeClass: function () {
        let className = ''

        this.animation.screens.forEach((screen) => {
          if (screen.name == this.$store.state.currentScreen) {
            className = `swipe-${screen.position}`
          }
        })

        return className
      },
      ...mapState([
        'currentScreen'
      ])
    }
  }
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    color: #2c2e33;
    font-family: 'Hiragino Sans';
    font-weight: 300;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #main {
    overflow: hidden;
    position: relative;
  }

  #main-inner {
    position: relative;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
  }

  .screen--active {
    display: block!important;
  }

  .side-screen {
    position: absolute;
    display: none;
  }

  .position-right {
    left: 100%;
    top: 0;
  }

  .position-left {
    left: -100%;
    top: 0;
  }

  .position-top {
    left: 0;
    top: -100%;
  }

  .position-top {
    left: 0;
    top: 100%;
  }

  #main-inner.swipe-right {
    transform: translate(-100%, 0);
    -webkit-transform: translate(-100%, 0);
    -moz-transform: translate(-100%, 0);
  }

  #main-inner.swipe-left {
    transform: translate(100%, 0);
    -webkit-transform: translate(100%, 0);
    -moz-transform: translate(100%, 0);
  }

  #main-inner.swipe-top {
    transform: translate(0, 100%);
    -webkit-transform: translate(0, 100%);
    -moz-transform: translate(0, 100%);
  }

  #main-inner.swipe-bottom {
    transform: translate(0, -100%);
    -webkit-transform: translate(0, -100%);
    -moz-transform: translate(0, -100%);
  }

  .screen-box {
    background: #fdfdfd;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }

  .screen-box__main {
    padding: 16px 16px 147px 16px;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
