<template>
  <div id="app">
    <section id="main">
      <section id="main-inner" :class="swipeClass">
        <hello></hello>
        <template v-for="component in animation.components">
          <component :is="component.name" :class="[`position-${component.position}`, { 'screen--active' : $store.state.currentScreen == component.name }]"></component>
        </template>
      </section>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NoteList from './components/NoteList.vue'
  import NoteListTest from './components/NoteListTest.vue'
  import Hello from './components/Hello.vue'
  import animation from './animation'

  export default {
    name: 'App',
    components: {
      NoteList,
      NoteListTest,
      Hello
    },
    data () {
      return {
        animation
      }
    },
    computed: {
      swipeClass: function () {
        let className = ''

        this.animation.components.forEach((component) => {
          if (component.name == this.$store.state.currentScreen) {
            className = `swipe-${component.position}`
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

  .screen-box {
    background: #fdfdfd;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }

  .item-box {
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 0px 5px 1px #eaeaea;
    -moz-box-shadow: 0px 0px 5px 1px #eaeaea;
    -webkit-box-shadow: 0px 0px 5px 1px #eaeaea;
  }

  .item-box__media img {
    width:100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .item-box__content {
    padding: 10px;
  }

  .screen-box__main {
    padding: 20px;
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

  #main-inner.swipe-right {
    transform: translate(-100%, 0);
    -webkit-transform: translate(-100%, 0);
    -moz-transform: translate(-100%, 0);
  }

  .screen--active {
    z-index: 999;
  }

  .position-right {
    position: absolute!important;
    left: 100%;
    top: 0;
  }
</style>
