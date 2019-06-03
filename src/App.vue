<template>
  <div
    id="app"
  >
    <NavBar
      ref="navbar"
      :show="showNav"
      :show-go-to-top="showGoToTop"
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
          :sm="18"
          :lg="18"
        >
          <p class="columns">
            Victor Mono is a programming font with
            <em>semi-connected cursive italics</em>
            and some symbol ligatures (!=, ->>, =>, ===, && etc).
            <br><br>
            It was drawn from scratch as a pet project / experiment
            <a
              v-scroll-to="'#why'"
              href="javascript:void(0)"
            >because I couldn’t find another</a>
            (free or paid) typeface I was entirely satisfied with.
            <br><br>
            <video
              autobuffer
              autoloop
              loop
              controls
              alt="The glyphs"
              class="specimen-loop"
              :class="{ 'inverted': theme === 'light' }"
            >
              <source src="@/assets/video/cycle.mp4">
            </video>
            The typeface is quite strict in style and features a large x-height.
            It is optimised for code and legibility at small to medium sizes on high-DPI displays where the
            <el-tooltip
              class="item"
              effect="dark"
              content="= might look weird on Windoze or in Electron-based apps"
              placement="top-start"
            >
              <span>OS and app</span>
            </el-tooltip>
            tries to render fonts nicely.
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
          :sm="18"
          :lg="18"
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
          :sm="18"
          :lg="18"
        >
          <p class="columns">
            I'm rather particular about what width, weight, style etc makes an effective and enjoyable typeface for code.
            <br><br>
            All fonts or typeface combo mashups I tried using while coding had several of these shortcomings (<em>subjectively, of course</em>):
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
              <li>Was a combination of eye-poppingly-different-in-style fonts</li>
              <li>Was very expensive</li>
            </ul>
            So eventually, a couple of months ago I had the idea of trying to make something on my own. Both designing it and making a website to present it has been an interesting experiment, and has resulted in a typeface which feels right to me.
            <br><br>
            You might like it as well. That's brilliant! You might not. That's also fine: you are free to use a different font. 😛
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="horisontal-large-image">
      <img :src="specimenBanner">
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
          :sm="18"
          :lg="18"
        >
          <p class="columns">
            The font is available in Roman and <em>Italic</em> styles.
            If you think the latter is a bit too much, an <em class="alt">Oblique</em> style is also included.
            <br><br>
            If you do try it out and like it, I would be very grateful for any
            <a
              href="javascript:void(0)"
              @click="thanks"
            >donations</a>.
            After initially pondering whether or not to sell it, I decided to give it away:
            <br><br>
            First, I couldn't be bothered to set up hosting/payment and commit to providing support the way a commercial product should.
            <br><br>
            Secondly, this has been an experiment to see if I could make something I wanted to use myself. As it stands, the font doesn't have a huge number of glyphs and ligatures — although I
            <a
              v-scroll-to="'#faq'"
              href="javascript:void(0)"
            >might add more</a>
            in the future.
            <br><br>
            Finally, I can identify with not wanting to shell out €100++ on a font. If you are able to and want to contribute: a sincere thank you! 🙏
          </p>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col class="centre">
          <el-button
            id="donate-button"
            icon="el-icon-medal-1"
            type="primary"
            round
            @click="thanks"
          >
            Donate
          </el-button>
          <el-tooltip
            class="item"
            effect="dark"
            content="Coming soon"
            placement="top-start"
          >
            <el-button
              id="download-button"
              icon="el-icon-download"
              round
            >
              Download
            </el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        :xs="22"
        :sm="18"
        :lg="18"
      >
        <p class="small centre">
          <em>If you have a nice screenshot of the font in use / used it for something cool, I'd love to
            <a
              target="_blank"
              href="mailto:victor.mono.font@gmail.com?subject=Here's how I used the font"
            >hear from you</a>.
          </em>
        </p>
      </el-col>
    </el-row>
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
              class="caption centre full-width"
            >
              &nbsp;
              <em v-show="revealFaq">Frequently Anticipated Questions</em>
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
          :sm="18"
          :lg="18"
        >
          <VueFaqAccordion
            :items="faqItems"
            active-color="#ccc"
            border-color="transparent"
            font-color="#ccc"
          />
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
          :sm="18"
          :lg="18"
        >
          <p class="small centre">
            <em>Lovely gradients</em>
            <br>
            <a
              target="_blank"
              href="https://sarcadass.github.io/granim.js/"
            >
              Granim.js</a>
            by
            <a
              target="_blank"
              href="https://twitter.com/Sarcadass"
            >
              Benjamin Blonde</a>
            <br><br>
            <em>Cool animated typing</em>
            <br>
            <a
              target="_blank"
              href="https://github.com/mattboldt/typed.js/"
            >
              Typed.js</a>
            by
            <a
              target="_blank"
              href="https://mattboldt.com"
            >
              Matt Boldt</a>
            <br><br>
            <em>Code editor</em>
            <br>
            <a
              target="_blank"
              href="https://github.com/surmon-china/vue-codemirror"
            >
              Vue-Codemirror</a>
            by
            <a
              target="_blank"
              href="https://github.com/surmon-china"
            >
              Surmon</a> and
            <a
              target="_blank"
              href="https://codemirror.net"
            >
              codemirror.net</a>
            <br><br>
            <em>Animations here & there</em>
            <br>
            <a
              target="_blank"
              href="https://animejs.com"
            >
              Anime.js</a>
            <br><br>
            <em>Smooth scrolling</em>
            <br>
            <a
              target="_blank"
              href="https://vue-scrollto.netlify.com"
            >
              vue-scrollto</a>
            by
            <a
              target="_blank"
              href="https://github.com/rigor789"
            >
              Igor Randjelovic</a>
            <br><br>
            <em>FAQ component</em>
            <br>
            <a
              target="_blank"
              href="https://github.com/gerasimvol/vue-faq-accordion"
            >
              vue-faq-accordion</a>
            by
            <a
              target="_blank"
              href="https://github.com/gerasimvol"
            >
              Vladimir Gerasimenko</a>
            <br><br>
            <em>Thank-you-confetti</em>
            <br>
            <a
              target="_blank"
              href="https://www.npmjs.com/package/dom-confetti"
            >
              dom-confetti</a>
            by
            <a
              target="_blank"
              href="https://twitter.com/danielundin"
            >
              Daniel Lundin</a>
            <br><br>
            <em>CSS framework / component library</em>
            <br>
            <a
              target="_blank"
              href="https://element.eleme.io/#/en-US"
            >
              Element</a>
            <br><br>
            <em>The nice JS framework</em>
            <br>
            <a
              target="_blank"
              href="https://vuejs.org"
            >
              Vue.js</a>
            <br><br>
            <em>Very nice (and expensive) font design software</em>
            <br>
            <a
              target="_blank"
              href="https://glyphsapp.com"
            >
              Glyphs</a>
            <br><br>
            <em>Font and web site</em>
            <br>
            <a
              target="_blank"
              href="mailto:victor.mono.font@gmail.com?subject=Thanks for making such a nice font"
            >
              Rune B</a>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import CodeView from '@/components/CodeView'
import VueFaqAccordion from 'vue-faq-accordion'
import anime from 'animejs'
import { confetti } from 'dom-confetti'

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    CodeView,
    VueFaqAccordion
  },
  data () {
    return {
      showHeaderText: false,
      showNav: true,
      showGoToTop: true,
      revealFaq: false,
      theme: localStorage.getItem('theme') || 'dark',
      faqItems: [
        {
          title: 'The font is missing an obscure ligature symbol used for indicating an infinite loop in the language Goskell when writing in ancient Valyrian. Would you be willing to add it?',
          value: '<a href="javascript:void(0)">I might</a>.',
          category: 'Design & features'
        }, {
          title: 'The font is missing an obscure ligature symbol used for indicating an infinite loop in the language Goskell when writing in ancient Valyrian. Would you be willing to add it?',
          value: '<a href="javascript:void(0)">I might</a>.',
          category: 'Design & features'
        }, {
          title: 'How long is a day and year on Venus?',
          value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
          category: 'Usage'
        }, {
          title: 'What animal smells like popcorn?',
          value: 'Binturongs smell like popcorn.',
          category: 'Other'
        }
      ]
    }
  },
  computed: {
    specimenBanner () {
      return require('./assets/img/specimen-' + this.theme + '.png')
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
            top: [offset, triggerHeight * -1],
            duration: 100,
            easing: 'easeInOutSine'
          })
        }
        if (this.$refs.header.$el.style.position !== 'sticky') {
          this.$refs.header.$el.style.position = 'sticky'
          this.$refs.header.$el.style.webkitPosition = 'sticky'
          document.querySelector('body').style.paddingTop = 0
        }
        this.showGoToTop = true
      } else {
        document.querySelector('body').style.paddingTop = headerHeight + 'px'
        if (this.$refs.header.$el.style.position !== 'absolute') {
          this.$refs.header.$el.style.position = 'absolute'
          this.$refs.header.$el.style.top = 0
        }
        this.showGoToTop = false
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
    celebrate (target) {
      confetti(target, {
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

.scroll-head {
  height: calc(36px + 2vw);
}

.content {
  padding: 10px;
}

.horisontal-large-image {
  width: 100vw;
  height: 37vw;
  margin-top: 2em;
  overflow: hidden;
  img {
    position: relative;
    top: -5vw;
    left: -50vw;
    width: 200vw;
  }
}

h1 {
  font-weight: normal;
}

em.alt {
  font-family: 'VictorMono-Oblique', monospace;
}

.specimen-loop {
  float: right;
  width: 60%;
  margin: 5px 0 5px 15px;
  filter: invert(1);
  mix-blend-mode: screen;
  &.inverted {
    filter: none;
    mix-blend-mode: normal;
  }
}

.content .el-button {
  font-size: 1.1em;
}
</style>
