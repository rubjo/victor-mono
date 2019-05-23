<template>
  <div class="header">
    <div
      ref="videoBg"
      class="video-bg"
    />
    <canvas class="header-gradients" />
    <div
      class="text"
      :class="{ 'hidden': !showText }"
    >
      <h1 ref="mainTitle">
        Victor Mono
      </h1>
      <h2>
        The <em class="property" />programming font
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
    showText: Boolean
  },
  mounted () {
    this.initGradient()
    this.initTyped()
    setTimeout(() => {
      anime({
        targets: this.$refs.videoBg,
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      })
    }, 1000)
  },
  methods: {
    initGradient () {
      return new Granim({
        element: '.header-gradients',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states: {
          'default-state': {
            gradients: [
              [
                { color: 'rgba(255, 153, 102, .9)', pos: 0 },
                { color: 'rgba(255, 94, 98, 1)', pos: 1 }
              ], [
                { color: 'rgba(0, 242, 96, .9)', pos: 0 },
                { color: 'rgba(5, 117, 230, 1)', pos: 1 }
              ], [
                { color: 'rgba(225, 238, 195, .9)', pos: 0 },
                { color: 'rgba(240, 80, 83, 1)', pos: 1 }
              ]
            ],
            transitionSpeed: 10000
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
          '"#%§§##/&*!'
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
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  padding-top: calc(48px + 2vw);
  text-align: center;
  h1 {
    margin: calc(2vw + 5px) 0 0 0;
    font-size: calc(80px + 6vw);
    font-weight: normal;
  }

  h2 {
    margin: 2vw 0 6vw 0;
    font-size: calc(12px + 2vw);
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
  background: url('../assets/img/header-bg.mp4');
  opacity: 0;
}

.header-gradients {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
