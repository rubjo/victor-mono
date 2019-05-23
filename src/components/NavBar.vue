<template>
  <transition name="el-zoom-in-top">
    <div
      v-show="show"
      class="navbar"
    >
      <a
        v-scroll-to="'#app'"
        href="#"
      >
        Top</a>
      <a
        v-scroll-to="'#try'"
        href="#"
      >
        Try</a>
      <a
        v-scroll-to="'#why'"
        href="#"
      >
        Why</a>
      <a
        v-scroll-to="'#download'"
        href="#"
      >
        Download</a>
      <a
        v-scroll-to="'#faq'"
        href="#"
      >
        FAQ</a>
      <a
        v-scroll-to="'#credits'"
        href="#"
      >
        Credits</a>
      <a
        class="themeIcon"
        href="javascript:void(0)"
        @click="toggleTheme"
      >
        <div
          v-show="theme === 'light'"
          class="moon theme"
        >
          <svg
            height="52"
            width="38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.01 1A25.02 25.02 0 0 0 1 26.01a25.03 25.03 0 0 0 35.01 22.91 1.2 1.2 0 0 0 0-2.18 22.62 22.62 0 0 1 0-41.46 1.2 1.2 0 0 0 0-2.18 24.93 24.93 0 0 0-10-2.1z"
              fill="none"
              :stroke="textColour"
              stroke-width="2"
            />
          </svg>
        </div>
        <div
          v-show="theme === 'dark'"
          class="sun theme"
        >
          <svg
            height="53"
            width="53"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              :stroke="textColour"
              stroke-width="2"
            >
              <circle
                cx="26.58"
                cy="26.62"
                r="9.44"
              />
              <path d="M26.58 11.78V1.7M26.58 51.85v-10.1M41.09 26.25H51.2M1.64 26.25h10.13" />
              <path d="M15.85 15.9L8.7 8.76M44.18 44.23l-7.14-7.14M36.34 15.86l7.16-7.15M8.45 43.76l7.16-7.16" />
              <path d="M32.38 12.6l3.86-9.32M17.05 49.62l3.86-9.32M40.25 31.53l9.35 3.87M3.8 16.43l9.36 3.88" />
              <path d="M20.77 12.6l-3.86-9.32M36.1 49.62l-3.86-9.32M39.72 20.42l9.35-3.87M3.28 35.51l9.35-3.87" />
            </g>
          </svg>
        </div>
      </a>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'NavBar',
  props: {
    show: Boolean
  },
  data () {
    return {
      theme: 'dark',
      backgroundColour: '#696969',
      textColour: '#fff'
    }
  },
  mounted () {
  },
  methods: {
    toggleTheme () {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'

      if (this.theme === 'dark') {
        this.backgroundColour = '#696969'
        this.textColour = '#fff'
      } else {
        this.backgroundColour = '#fff'
        this.textColour = '#333'
      }

      const root = document.documentElement
      root.style.setProperty('--background-color-base', this.backgroundColour)
      root.style.setProperty('--color-text-primary', this.textColour)

      anime({
        targets: '.themeIcon circle',
        scale: [0, 1],
        duration: 1500,
        delay: 250,
        easing: 'easeOutExpo'
      })

      anime({
        targets: '.themeIcon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2500,
        delay (el, i) { return i * 250 },
        direction: 'normal',
        loop: false
      })

      anime({
        targets: '.themeIcon svg',
        rotate: [0, 315],
        scale: [0.5, 0.5],
        duration: 3000,
        easing: 'easeOutExpo'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .navbar {
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: calc(10px + 1vw);
    text-align: center;
    a {
      flex: 1;
      max-width: 200px;
      padding: calc(18px + 0.8vw) 0;
      color: var(--color-text-primary);
      text-decoration: none;
      &:hover {
        font-style: italic;
      }
    }
    .themeIcon {
      display: flex;
      justify-content: center;
      padding: 0.8vw 0;
      .theme {
        text-align: center;
        svg {
          transform: scale3d(0.5, 0.5, 1);
          circle {
            transform-origin-x: 50%;
            transform-origin-y: 50%;
          }
        }
      }
    }
  }

</style>
