<template> <!-- Go ahead and edit me -->
  <div id="app" mode="inception">
    <NavBar ref="navbar" :show="showNav" :show-go-to-top="showGoToTop" />
    <Header ref="header" :show-text="showHeaderText" :theme="theme" />
    <div class="content">
      Victor Mono is a free programming font with <em>semi-connected cursive italics</em>,
      symbol ligatures (!=, ->>, =>, ===, >= ++) and Latin, Cyrillic and Greek characters.
<!-- [...] -->

<script> /* eslint-disable */
  import lotsOfStuff from '@/everywhere'

  export default {
    name: 'Home',
    components: { NavBar, Header, CodeView, VueFaqAccordion },
    data () {
      return { theme: localStorage.getItem('theme') || 'dark' }
    },
    computed: {
      stylesDarkThumb () { return require('./assets/img/styles-dark-thumb.png') },
      stylesLightThumb () { return require('./assets/img/styles-light-thumb.png') }
    },
    mounted () { this.doLotsOfStuff() },
    methods: {
      initScrollWatcher () {
        function throttle (fn, wait) {
          let time = Date.now()
          return function () {
            if ((time + wait - Date.now()) < 0) {
              setTimeout(fn, wait)
              time = Date.now()
            }
          }
        }

        ['scroll', 'resize'].forEach(event => {
          window.addEventListener(event, throttle(this.setHeaderHeight, 250))
          window.addEventListener(event, throttle(this.calculateHeaderText, 250))
        })
      },
      thanks (e) {
        window.open('https://paypal.me/runbjo')
        setTimeout(() => {
          window.addEventListener('focus', this.celebrate(e.target))
        }, 1000)
      }
    }
  }
</script>

<style lang="scss">
  @import 'styles/globals.scss';

  em.alt {
    font-family: 'VictorMono-Oblique', monospace;
  }

  .horizontal-large-image {
    width: 100vw;
    height: 37vw;
    margin-top: 2em;
    overflow: hidden;
  }

  code {
    padding: 6px;
    font-style: normal;
    background: var(--background-color-alternate);
    border-radius: 6px;
    transition: background 1s;
  }
</style>
