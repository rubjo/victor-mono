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
        class="row-bg actions no-break"
        justify="center"
      >
        <el-col>
          <a
            v-scroll-to="'#download'"
          >
            <el-button
              icon="el-icon-download"
            >
              Download
            </el-button>
          </a>
          &nbsp;
          <a
            @click="showSharing = !showSharing"
          >
            <el-button
              icon="el-icon-share"
            >
              Share
            </el-button>
          </a>
          <transition name="el-fade-in">
            <span
              v-show="showSharing"
              class="share"
            >
              <social-sharing
                url="https://rubjo.github.io/victor-mono/"
                title="Victor Mono: free programming font with italics and ligatures"
                description="Victor Mono is a free programming font with semi-connected cursive italics and symbol ligatures."
                quote="Victor Mono is a free programming font with semi-connected cursive italics and symbol ligatures."
                hashtags="free,font,italics,ligatures"
                inline-template
              >
                <div>
                  <network network="twitter">
                    <span class="icon">
                      <svg
                        height="30"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 4.6c-1 .4-1.9.6-2.9.7a5 5 0 0 0 2.2-2.7c-1 .6-2 1-3.1 1.2-1-1-2.2-1.6-3.6-1.6a5 5 0 0 0-4.8 6 14 14 0 0 1-10.2-5c-.4.7-.6 1.5-.6 2.4a5 5 0 0 0 2.2 4.1c-.8 0-1.6-.2-2.3-.6A5 5 0 0 0 5 14a5 5 0 0 1-2.2 0 5 5 0 0 0 4.6 3.5 9.9 9.9 0 0 1-7.3 2 14 14 0 0 0 7.6 2.3c9 0 14-7.5 14-14V7A10 10 0 0 0 24 4.6z" />
                      </svg>
                    </span>
                  </network>
                  <network network="facebook">
                    <span class="icon">
                      <svg
                        height="30"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
                      </svg>
                    </span>
                  </network>
                  <network network="reddit">
                    <span class="icon">
                      <svg
                        height="30"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.2 14v.9c0 3.4 4.3 6.2 9.7 6.2 5.4 0 9.8-2.8 9.8-6.2v-.8-.2a5.7 5.7 0 0 0-2.5-3.2c-1.9-1.3-4.4-2-7.3-2a13 13 0 0 0-7.3 2A5.8 5.8 0 0 0 2.2 14zm9.8 5.5c-1.8 0-3-.4-3.9-1.2a.4.4 0 0 1 0-.6c.2-.2.5-.2.6 0 .7.6 1.7.9 3.3.9 1.5 0 2.6-.3 3.2-1h.6c.2.3.2.5 0 .7-.8.8-2 1.2-3.8 1.2zm-3.6-7.6a1.7 1.7 0 1 0 0 3.3c.9 0 1.6-.7 1.6-1.6 0-1-.7-1.7-1.6-1.7zm7.2 0a1.7 1.7 0 1 0 0 3.3c1 0 1.7-.7 1.7-1.6 0-1-.8-1.7-1.7-1.7zm4.6-1.6c1 .9 1.8 1.8 2.1 3 .5-.4.8-1 .8-1.5a1.8 1.8 0 0 0-3-1.5zM2.7 10a1.8 1.8 0 0 0-1.2 3.2c.4-1.1 1.2-2 2.3-3l-1-.2zM12 22C6 22 1.2 18.8 1.2 15v-.8a2.7 2.7 0 1 1 3.3-4.4c1.9-1.1 4.4-1.9 7.1-2l1.8-5.5.4.1 4.3 1c.3-.8 1.1-1.3 2-1.3a2.2 2.2 0 0 1 0 4.4c-1.2 0-2.2-1-2.2-2.2l-3.8-1-1.5 4.6c2.7 0 5 .8 6.8 2 .5-.5 1.2-.7 1.9-.7a2.7 2.7 0 0 1 1.3 5v.8c0 4-4.7 7.1-10.6 7.1zM20.1 3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 1 0 0-2.6z" />
                      </svg>
                    </span>
                  </network>
                  <network network="weibo">
                    <span class="icon">
                      <svg
                        height="30"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.1 20.3c-4 .4-7.4-1.4-7.7-4-.2-2.6 2.8-5 6.8-5.4 4-.4 7.4 1.4 7.6 4 .3 2.6-2.7 5-6.7 5.4zm-1-3c-.4.5-1.3.8-1.9.5-.6-.3-.8-1-.4-1.6.4-.6 1.2-.8 1.8-.6.6.3.8 1 .5 1.6zm1.2-1.7c-.1.2-.4.3-.7.2-.2 0-.3-.3-.1-.5 0-.3.4-.4.6-.3.3.1.3.4.2.6zm.2-2.7c-1.9-.5-4 .4-4.9 2-.8 1.8 0 3.7 2 4.3 2 .6 4.2-.3 5-2.2.9-1.8-.1-3.6-2.1-4.1zm7.6-1.3c-.4 0-.6-.1-.4-.6.3-1 .4-1.8 0-2.4-.8-1-3-1-5.4 0 0 0-.8.3-.6-.3.4-1.2.3-2.2-.3-2.8-1.3-1.3-4.8 0-7.8 3.1C1.3 10.9 0 13.3 0 15.3c0 4 5.1 6.4 10 6.4 6.6 0 11-3.8 11-6.8 0-1.8-1.6-2.8-3-3.3zm1.9-5c-.8-.9-2-1.2-3-1-.4 0-.7.5-.6 1 0 .3.5.6 1 .5a1.5 1.5 0 0 1 1.7 2c-.2.4 0 .8.5 1 .4 0 .8-.1 1-.6.3-1 .1-2.1-.7-3zm2.4-2.2a6.4 6.4 0 0 0-6-2 1 1 0 0 0-.8 1c.1.6.6.9 1.1.8A4.5 4.5 0 0 1 22 10c-.2.5 0 1 .5 1.1.5.2 1 0 1.2-.5.7-2.1.2-4.5-1.3-6.3z" />
                      </svg>
                    </span>
                  </network>
                </div>
              </social-sharing>
            </span>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import initGradient from '@/utils/init-gradients.js'
import Typed from 'typed.js'
import anime from 'animejs'

export default {
  name: 'Header',
  props: {
    theme: {
      type: String,
      default: localStorage.getItem('theme') || 'dark'
    }
  },
  data () {
    return {
      granim: null,
      showSharing: false
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
    this.granim = initGradient('.header-gradients', this.theme)
    this.granim.changeState(this.theme)
    this.initTyped()
  },
  methods: {
    initTyped () {
      const options = {
        strings: [
          '"#%§§##/&*!',
          '(im)peachy',
          '<span style="text-decoration: line-through;">modest</span>',
          '==>',
          '>=<=-><-=>><<=',
          'A1',
          'appealing',
          'attractive',
          'awesome',
          'be-all and end-all',
          'beautiful',
          'best',
          'break-the-wheel',
          'brilliant',
          'budget-friendly',
          'charming',
          'classy',
          'clever',
          'concise',
          'consistent',
          'cool',
          'cozy',
          'crisp',
          'cursive',
          'cute',
          'dainty',
          'dashing',
          'de facto',
          'decent',
          'definitive',
          'delicate',
          'democratic',
          'distinguished',
          'donate-what-it\'s-worth',
          'effective',
          'efficient',
          'elegant',
          'enjoyable',
          'essential',
          'experimental',
          'exquisite',
          'fancy',
          'fine',
          'foxy',
          'free',
          'friendly',
          'go-to',
          'good-looking',
          'gorgeous',
          'graceful',
          'grand',
          'great',
          'happy',
          'hip(ster)',
          'ideal',
          'invaluable',
          'inviting',
          'lovely',
          'magic',
          'mind-blowing',
          'must-have',
          'neat',
          'nice',
          'nice-looking',
          'no-compromise',
          'one true',
          'opulent',
          'perfect',
          'plush',
          'polished',
          'poor man’s',
          'pretty',
          'ravishing',
          'readable',
          'real aesthete’s',
          'real',
          'refined',
          'retina-ready',
          'scannable',
          'slanted',
          'slender',
          'slick',
          'slightly whimsical',
          'slim',
          'smart',
          'smashing',
          'sophisticated',
          'sterling',
          'suave',
          'sublime',
          'sumptuous',
          'super',
          'supreme',
          'svelte',
          'sweet',
          'sylphlike',
          'tasteful',
          'top-notch',
          'trustworthy',
          'victorious',
          'warm',
          'wicked',
          'willowy',
          'wonderful',
          'ανέξοδος',
          'ελληνιστικός',
          'κυριλλικό',
          'πανεμορφη',
          'отличный',
          'прекрасный'
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
  position: relative;
  top: 0;
  z-index: 1;
  width: 100%;
  padding-top: calc(10px + 2vw);
  text-align: center;
  h1 {
    margin: calc(3vw + 15px) 0 0 0;
    font-size: calc(40px + 7vw);
    font-weight: normal;
    line-height: 1em;
  }

  h2 {
    margin: 3vw 0 2vw 0;
    font-size: calc(18px + 1.5vw);
    font-weight: normal;
    a {
      text-decoration: none;
    }
  }

  .actions {
    padding: calc(10px + 2vw) 0 calc(20px + 4vw) 0;
    white-space: nowrap;
  }

  .share {
    display: block;
    padding-top: 5vw;
    margin: 5px;
  }

  @media (min-width: 768px) {
    .share {
      position: absolute;
      display: inline-flex;
      padding: 0;
      margin-top: 5px;
    }
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
