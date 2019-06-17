<template>
  <div class="header">
    <div
      ref="videoBg"
      class="video-bg"
    >
      <video
        ref="video"
        autobuffer
        autoplay
        muted
        autoloop
        playsinline
        loop
      >
        <source
          src="../assets/video/headerbg.mp4"
          type="video/mp4"
        >
        <source
          src="../assets/video/headerbg.webm"
          type="video/webm"
        >
      </video>
    </div>
    <canvas
      ref="gradients"
      class="header-gradients"
    />
    <div
      class="text"
      :class="{ 'hidden': !showText }"
    >
      <h1 ref="mainTitle">
        Victor Mono
      </h1>
      <h2>
        The <em class="property" />
        <br class="hidden-sm-and-up">
        programming font
      </h2>
      <el-row
        type="flex"
        class="row-bg"
        justify="center"
      >
        <el-col :span="6">
          <div class="grid-content">
            <div
              v-scroll-to="'#try'"
              class="large-icon"
            >
              <i class="el-icon-arrow-down" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Granim from 'granim'
import Typed from 'typed.js'
import anime from 'animejs'

export default {
  name: 'Header',
  props: {
    showText: Boolean,
    theme: {
      type: String,
      default: localStorage.getItem('theme') || 'dark'
    }
  },
  data () {
    return {
      granim: null
    }
  },
  watch: {
    theme: {
      async handler (newVal, oldVal) {
        if (this.granim) this.granim.changeState(newVal)

        const oldOpacity = this.theme === 'dark' ? 0.2 : 0.5
        const newOpacity = this.theme === 'dark' ? 0.5 : 0.2

        await anime({
          targets: this.$refs.videoBg,
          opacity: [oldOpacity, 0],
          duration: 250,
          easing: 'linear'
        }).finished

        if (newVal === 'light') {
          this.$refs.gradients.style.mixBlendMode = 'multiply'
          this.$refs.videoBg.style.filter = 'invert(1)'
        } else {
          this.$refs.gradients.style.mixBlendMode = 'screen'
          this.$refs.videoBg.style.filter = 'invert(0)'
        }

        anime({
          targets: this.$refs.videoBg,
          opacity: [0, newOpacity],
          duration: 250,
          easing: 'linear'
        })

        return Promise.resolve()
      },
      immediate: true
    }
  },
  mounted () {
    this.granim = this.initGradient()
    this.granim.changeState(this.theme)
    this.initTyped()
  },
  methods: {
    initGradient () {
      function shuffle (a) {
        var j, x, i
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1))
          x = a[i]
          a[i] = a[j]
          a[j] = x
        }
        return a
      }

      const darkGradients = [
        ['#cc6622', '#8c1bab'],
        ['#380036', '#0cbaba'],
        ['#85d797', '#5d4257'],
        ['#0250c5', '#d43f8d'],
        ['#13547a', '#60b0b7'],
        ['#2b76b9', '#35eb93'],
        ['#a40606', '#d98324']
      ]

      const lightGradients = [
        ['#8af094', '#ffd1ff'],
        ['#f6d365', '#fda085'],
        ['#84fab0', '#8fd3f4'],
        ['#fa709a', '#fee140'],
        ['#4facfe', '#00f2fe'],
        ['#43e97b', '#38c9f7'],
        ['#f83600', '#f9d423']
      ]

      return new Granim({
        element: '.header-gradients',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states: {
          'default-state': {
            gradients: shuffle(this.theme === 'dark' ? darkGradients : lightGradients),
            transitionSpeed: 5000
          },
          'dark': {
            gradients: shuffle(darkGradients),
            transitionSpeed: 5000
          },
          'light': {
            gradients: shuffle(lightGradients),
            transitionSpeed: 5000
          }
        }
      })
    },
    initTyped () {
      const options = {
        strings: [
          '==>',
          'cursive',
          '<span style="text-decoration: line-through;">modest</span>',
          'break-the-wheel',
          'be-all and end-all',
          'donate-what-it\'s-worth',
          'good-looking',
          'schizophrenic',
          'de facto',
          'one true',
          'awesome',
          'essential',
          'go-to',
          'best',
          'invaluable',
          'free',
          'no-compromise',
          'retina-ready',
          'friendly',
          'elegant',
          'crisp',
          'slender',
          'consistent',
          'fancy',
          'nice',
          'hip(ster)',
          'cool',
          'must-have',
          'democratic',
          'scannable',
          'readable',
          'enjoyable',
          'lovely',
          'effective',
          'perfect',
          'beautiful',
          'ideal',
          'slightly whimsical',
          'victorious',
          '"#%§§##/&*!',
          'experimental',
          'definitive',
          'real',
          'attractive',
          'cozy',
          'budget-friendly',
          'trustworthy',
          'poor man’s',
          'real aesthete’s',
          '(im)peachy',
          '>=<=-><-=>><<='
        ],
        startDelay: 1000,
        typeSpeed: 50,
        backSpeed: 10,
        smartBackspace: true,
        backDelay: 1500,
        loop: true,
        shuffle: true
      }

      return new Typed('.property', options)
    }
  }
}

</script>
<style
  scoped
  lang="scss"
>
.header {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  padding-top: calc(48px + 2vw);
  text-align: center;
  h1 {
    margin: calc(3vw + 5px) 0 0 0;
    font-size: calc(80px + 6vw);
    font-weight: normal;
  }

  h2 {
    margin: 2vw 0 5vw 0;
    font-size: calc(18px + 1.5vw);
    font-weight: normal;
  }

  .large-icon {
    margin: 0 0 1vw 0;
    font-size: 3vw;
    font-weight: normal;
  }

  .text {
    opacity: 1;
    transition: opacity 2s;
    h1,
    h2 {
      transition: transform 10s ease-out;
      transform: scale(1);
    }
    &.hidden {
      opacity: 0;
      transition: opacity 0.25s;
      h1,
      h2 {
        transition-duration: 0s;
        transform: scale(0.85);
      }
    }
  }
}

.video-bg {
  position: absolute;
  top: 0;
  z-index: -2;
  width: 100%;
  height: calc(100% - 1px);
  overflow: hidden;
  opacity: 0.5;
  video {
    width: 100%;
    min-width: 1000px;
  }
}

.header-gradients {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
}
</style>
