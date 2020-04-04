<template>
  <transition name="el-zoom-in-top">
    <div
      class="navbar"
      :class="{ 'visible': show }"
    >
      <canvas
        ref="gradients"
        class="navbar-gradients"
      />
      <a
        v-scroll-to="'#app'"
        :class="{ 'collapsed': !showGoToTop }"
        href="#"
      >
        <i class="el-icon-arrow-up" /></a>
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
        Get</a>
      <a
        v-scroll-to="'#how'"
        class="hidden-xs-only"
        href="#"
      >
        How</a>
      <a
        v-scroll-to="'#faq'"
        href="#"
      >
        FAQ</a>
      <a
        v-scroll-to="'#credits'"
        class="hidden-xs-only"
        href="#"
      >
        Credits</a>
      <a
        href="https://github.com/rubjo/victor-mono"
        target="_blank"
      >
        <img
          src="../assets/img/github.png"
          class="octocat"
          alt="Octocat"
        >
      </a>
      <a
        ref="themeIcon"
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
import initGradient from '@/utils/init-gradients.js'

export default {
  name: 'NavBar',
  props: {
    showGoToTop: Boolean,
    show: Boolean
  },
  data () {
    return {
      granim: null,
      theme: localStorage.getItem('theme') || 'dark',
      backgroundColour: '#595959',
      textColour: '#eee'
    }
  },
  watch: {
    show () {
      this.spin()
    },
    theme (newVal, oldVal) {
      this.granim.changeState(newVal)
    }
  },
  mounted () {
    this.spin()
    this.setAppearance()
    this.granim = initGradient('.navbar-gradients', this.theme)
    this.granim.changeState(this.theme)
  },
  methods: {
    spin () {
      anime({
        targets: '.themeIcon svg',
        rotate: [-45, 315],
        scale: [0.75, 1.25, 1, 1],
        strokeColor: ['#f0f', '#000'],
        delay: 1500,
        duration: 2000,
        easing: 'easeInOutSine'
      })
    },
    toggleTheme () {
      this.$refs.themeIcon.style.transform = 'scale(0)'

      anime({
        targets: '.themeIcon circle',
        scale: [0, 1],
        duration: 1500,
        easing: 'easeInOutSine'
      })

      anime({
        targets: '.themeIcon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2500,
        delay (el, i) { return i * 250 + 250 },
        direction: 'normal',
        loop: false
      })

      anime({
        targets: '.themeIcon svg',
        rotate: [0, 315],
        strokeColor: ['#f0f', '#000'],
        delay: 500,
        duration: 3000,
        easing: 'easeInOutSine'
      })

      setTimeout(() => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', this.theme)
        this.setAppearance()
        this.$refs.themeIcon.style.transform = 'scale(0.5)'
      }, 100)
    },
    setAppearance () {
      if (this.theme === 'dark') {
        this.$emit('darkTheme')
        this.backgroundColour = '#2a2a2a'
        this.alternateBackgroundColour = '#333'
        this.textColour = '#eee'
      } else {
        this.$emit('lightTheme')
        this.backgroundColour = '#fff'
        this.alternateBackgroundColour = '#f2f2f2'
        this.textColour = '#222'
      }

      const root = document.documentElement
      root.dataset.theme = this.theme
      root.style.setProperty('--background-color-base', this.backgroundColour)
      root.style.setProperty('--background-color-alternate', this.alternateBackgroundColour)
      root.style.setProperty('--color-text-primary', this.textColour)
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
    justify-content: space-between;
    width: 100%;
    font-size: calc(18px + 0.8vw);
    text-align: center;
    opacity: 0;
    &.visible {
      opacity: 1;
    }
    a {
      flex: 1;
      min-width: 10px;
      padding: calc(10px + 0.7vw) 0;
      color: var(--color-text-primary);
      text-decoration: none;
      transition: flex 1s, color 1s, opacity 1s;
      &:hover {
        font-style: italic;
      }
      &.collapsed {
        flex: 0;
        min-width: 0;
        opacity: 0;
      }
    }
    .themeIcon {
      display: flex;
      justify-content: center;
      padding: calc(0.9% - 2px) 0;
      transform: scale(0.5);
      .theme {
        text-align: center;
        svg {
          circle {
            transform-origin-x: 50%;
            transform-origin-y: 50%;
          }
        }
      }
    }
  }

  @media all and (max-width: 768px) {
    .navbar {
      top: auto;
      bottom: 0;
      opacity: 1;
    }
  }

  .octocat {
    height: calc(20px + 0.75vw);
    margin-top: 5px;
    filter: invert(0%);
    transition: -webkit-filter 1s;
  }

  .navbar-gradients {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
  }
</style>
