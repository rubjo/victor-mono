<template>
  <div
    id="app"
  >
    <NavBar
      ref="navbar"
      :show="showNav"
      @darkTheme="theme = 'dark'"
      @lightTheme="theme = 'light'"
    />
    <Header
      ref="header"
      :show-text="showHeaderText"
      :theme="theme"
    />
    <div class="content">
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="16"
        >
          <p class="columns">
            Victor Mono is a programming font with
            <em>semi-connected cursive italics</em>
            and symbol ligatures
            (!=, ->>, =>, ===, && etc).
            <br><br>
            The typeface is quite strict in style and features a large x-height.
            It is optimised for code and legibility at small to medium sizes on high-DPI displays where the OS and app tries to render fonts nicely.
          </p>
        </el-col>
      </el-row>
      <div
        id="try"
        class="scroll-head"
      />
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>Try it</em>
          </h1>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="16"
        >
          <CodeView
            :theme="theme"
          />
        </el-col>
      </el-row>
    </div>
    <div
      id="why"
      class="scroll-head"
    />
    <div class="content">
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>Why</em>
          </h1>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="16"
        >
          <p class="columns">
            Victor Mono was drawn from scratch as a pet project because I couldn’t find another (free or paid) typeface I was entirely satisfied with.
            I tried quite a few.
            <br><br>
            All other fonts or typeface combo mashups I tried using while coding had several of these — <em>subjectively, of course</em> — shortcomings:
            <ul>
              <li>Missing cursive italics</li>
              <li>Missing programming symbol ligatures</li>
              <li>Was too heavy and inelegant</li>
              <li>Was too light and straining to read</li>
              <li>Was too wide and wasted space</li>
              <li>Was too narrow and hard to scan</li>
              <li>Seemed unfinished (had weird or misaligned curves/artifacts)</li>
              <li>Seemed childish or unprofessional (too soft or informal appearance)</li>
              <li>Seemed imbalanced or inconsistent</li>
              <li>Was too expensive</li>
            </ul>
            So eventually, a couple of months ago I had the idea of trying to make something on my own. Both designing it and making a website to present it has been an interesting experiment, and has resulted in a typeface which feels right to me.
            <br><br>
            You might like it as well. That's brilliant! You might not. That's also fine: you are free to use a different font. 😛
          </p>
        </el-col>
      </el-row>
    </div>
    <div
      id="download"
      class="scroll-head"
    />
    <div class="content">
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>Get it</em>
          </h1>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="16"
        >
          <p class="columns">
            You can download and use the font for free.
            It is available in Roman and Italic styles — and should you think the latter is just taking things too far, an Oblique style is also included as an alternative.
            <br><br>
            If you do try it out and like it, I would very much appreciate a donation.
            After initially planning to sell it, I decided to give it away for two
            reasons:
            <br><br>
            First, I couldn't really be bothered to set up a dedicated domain hosting and commit to providing support the way I feel a commercial product should.
            <br><br>
            Secondly,
            I can understand not wanting to shell out €40-100 ++ for a font. Perhaps the ones who are able to and want to will help cover time spent and rather expensive font design software voluntarily. To anyone actually donating: a sincere thank you! 🙏
          </p>
        </el-col>
      </el-row>
      <div
        id="donate"
        class="scroll-head"
      />
      <el-row
        type="flex"
        justify="center"
      >
        <el-col class="centre">
          <el-button
            icon="el-icon-medal-1"
            type="primary"
            round
            @mouseenter="celebrate"
            @click="thanks"
          >
            Donate
          </el-button>
          <el-button
            icon="el-icon-download"
            round
          >
            Download
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div
      id="faq"
      class="scroll-head"
    />
    <div class="content">
      <el-row>
        <el-col>
          <h1
            class="centre"
            @mouseenter="revealFaq = true"
            @mouseleave="revealFaq = false"
          >
            <em>FAQ*</em>
          </h1>
          <transition name="el-zoom-in-top">
            <div
              v-show="revealFaq"
              class="caption centre full-width"
            >
              <em>Frequently Anticipated Questions</em>
            </div>
          </transition>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="16"
        >
          Coming soon
        </el-col>
      </el-row>
    </div>
    <div
      id="credits"
      class="scroll-head"
    />
    <div class="content">
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>Credits</em>
          </h1>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="16"
        >
          Coming soon
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import CodeView from '@/components/CodeView'
import anime from 'animejs'
import { confetti } from 'dom-confetti'

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    CodeView
  },
  data () {
    return {
      showHeaderText: false,
      showNav: true,
      revealFaq: false,
      theme: localStorage.getItem('theme') || 'dark'
    }
  },
  mounted () {
    this.initScrollWatcher()
    this.setHeaderHeight()
    this.calculateHeaderText()
  },
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
        window.addEventListener(event, throttle(this.setHeaderHeight, 200))
        window.addEventListener(event, throttle(this.calculateHeaderText, 250))
      })
    },
    setHeaderHeight () {
      const top = window.scrollY
      const mainTitle = this.$refs.header.$el.querySelector('h1')
      const margin = parseInt(window.getComputedStyle(mainTitle).marginTop)
      const navBarHeight = mainTitle.offsetTop - margin
      const headerHeight = this.$refs.header.$el.offsetHeight
      const triggerHeight = headerHeight - navBarHeight
      if (top > triggerHeight) {
        const offset = this.$refs.header.$el.getBoundingClientRect().y
        if (offset !== triggerHeight) {
          this.$refs.header.$el.style.top = triggerHeight * -1
          anime({
            targets: this.$refs.header.$el,
            top: [this.$refs.header.$el.getBoundingClientRect().y, triggerHeight * -1],
            duration: 100,
            easing: 'easeInOutSine'
          })
        }
        if (this.$refs.header.$el.style.position !== 'sticky') {
          this.$refs.header.$el.style.position = 'sticky'
          document.querySelector('body').style.paddingTop = 0
        }
      } else {
        document.querySelector('body').style.paddingTop = headerHeight + 'px'
        if (this.$refs.header.$el.style.position !== 'absolute') {
          this.$refs.header.$el.style.position = 'absolute'
          this.$refs.header.$el.style.top = 0
        }
      }
    },
    calculateHeaderText () {
      const top = window.scrollY
      const mainTitle = this.$refs.header.$el.querySelector('h1')
      const margin = parseInt(window.getComputedStyle(mainTitle).marginTop)
      const navBarHeight = mainTitle.offsetTop - margin
      const headerHeight = this.$refs.header.$el.offsetHeight
      const triggerHeight = headerHeight - navBarHeight
      if (top > triggerHeight) {
        this.showHeaderText = false
      } else {
        this.showHeaderText = true
      }

      const hideStart = mainTitle.getBoundingClientRect().top + margin
      this.showNav = window.scrollY < hideStart || window.scrollY > triggerHeight
    },
    celebrate () {
      const button = document.querySelector('#donate')
      confetti(button, {
        angle: 90,
        spread: 60,
        startVelocity: 50,
        elementCount: 250,
        dragFriction: 0.125,
        duration: 3000,
        stagger: 2,
        width: '10px',
        height: '10px',
        colors: [
          '#393939',
          '#747369',
          '#515151',
          '#a09f93',
          '#2b2b2b',
          '#ffffff',
          '#e2e0d7',
          '#ff7a7f',
          '#f99157',
          '#dd99dd',
          '#66aadd',
          '#ffee66',
          '#6699cc',
          '#66ffdd',
          '#99dd99',
          '#99cc99',
          '#ff332a',
          '#66cccc',
          '#d27b53',
          '#f92672',
          '#a6e22e',
          '#967efb',
          '#565656'
        ]
      })

      window.removeEventListener('focus', this.celebrate)
    },
    thanks () {
      window.open('https://paypal.me/runbjo')
      window.addEventListener('focus', this.celebrate)
    }
  }
}
</script>

<style lang="scss">
@import 'styles/globals.scss';

.scroll-head {
  height: calc(36px + 2vw);
}

.content {
  padding: 10px;
}

h1 {
  font-weight: normal;
}
</style>
