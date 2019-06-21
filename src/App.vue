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
            and symbol ligatures (!=, ->>, =>, ===, &lt;=, &gt;= ++).
            <br><br>
            It was drawn from scratch as a pet project / experiment
            <a
              v-scroll-to="'#why'"
              href="javascript:void(0)"
            >because I couldn’t find another</a>
            free or paid typeface I was entirely satisfied with.
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
            The typeface is clean, crisp and strict, with a large x-height.
            It is optimised for code and legibility on high-DPI displays where the
            <el-tooltip
              class="item"
              effect="dark"
              content="= might look weird on Windoze or in Electron-based apps"
              placement="top-start"
            >
              <span>OS and app</span>
            </el-tooltip>
            try to render fonts nicely. (More weights to be released soon, to make it usable in eg. VS Code. 🙂)
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="content alternate-bg">
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
    <div class="content">
      <div
        id="why"
        class="scroll-head"
      />
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
            I'm rather particular about what width, weight and style makes an effective and enjoyable typeface for code.
            <br><br>
            All fonts or typeface combo mashups I tried using while coding had several of these shortcomings (<em>subjectively, of course</em>):
            <ul>
              <li>No cursive italics</li>
              <li>Had nice italics, but regular/Roman style was not to my taste</li>
              <li>No programming symbol ligatures</li>
              <li>Too heavy and inelegant</li>
              <li>Too light and straining to read</li>
              <li>Too wide and wasted space</li>
              <li>Too narrow and hard to scan</li>
              <li>Seemed unfinished or had weird/misaligned curves/artifacts</li>
              <li>Seemed childish or unprofessional (too soft or informal appearance)</li>
              <li>Seemed imbalanced or inconsistent</li>
              <li>Combined two eye-poppingly-too-different-in-style fonts</li>
              <li>Very expensive</li>
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
    <div class="content">
      <div
        id="download"
        class="scroll-head"
      />
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
            After initially pondering whether or not to sell it,
            I decided to give it away.
            If you are able to and want to contribute: a sincere thank you! 🙏
          </p>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col class="centre">
          <a
            id="donate-link"
          >
            <el-button
              icon="el-icon-medal-1"
              type="primary"
              round
              @click="thanks"
            >
              Donate
            </el-button>
          </a>
          &nbsp;
          <a
            id="download-link"
            href="Victor Mono.zip"
          >
            <el-button
              icon="el-icon-download"
              round
            >
              Download
            </el-button>
          </a>
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
          <em>With
            <a
              target="_blank"
              href="https://github.com/Homebrew/homebrew-cask-fonts">
              homebrew-cask-fonts</a>,
            just run
            <code>brew cask install font-victor-mono</code>.
          </em>
          <br>
          <em>If you have a nice screenshot of the font in use / used it for something cool, I'd love to
            <a
              target="_blank"
              href="mailto:victor.mono.font@gmail.com?subject=Here's how I used the font"
            >hear from you</a>.
          </em>
        </p>
      </el-col>
    </el-row>
    <div class="content alternate-bg">
      <div
        id="faq"
        class="scroll-head"
      />
      <el-row>
        <el-col>
          <h1
            class="centre"
            @mouseenter="revealFaq = true"
            @touchstart="revealFaq = true"
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
            border-color="transparent"
          />
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div
        id="credits"
        class="scroll-head"
      />
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
            If making this font has been a learning experiment, the same can be said for trying out a number of frameworks/packages to make this web site. Big thanks to the following:
            <br><br><br>
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
            <em>Supercool scaffolding and tools for Vue.js development</em>
            <br>
            <a
              target="_blank"
              href="https://cli.vuejs.org"
            >
              Vue CLI</a>
            <br><br>
            <em>Automated building and deployment of web site from source</em>
            <br>
            <a
              target="_blank"
              href="https://travis-ci.org"
            >
              Travis CI</a>
            <br><br>
            <em>Very nice (and rather expensive) font design software</em>
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
      showGoToTop: false,
      revealFaq: false,
      theme: localStorage.getItem('theme') || 'dark',
      faqItems: [
        {
          title: 'The typeface is a bit light/heavy to my liking. Will you offer more weights in the future?',
          value: '<a href="https://paypal.me/runbjo" target="_blank">Maybe</a>. As of now, the font uses the weight I think looks best on a high-DPI display using Sublime Text on a Mac – but I do understand others will prefer other weights.',
          category: 'Design & features'
        }, {
          title: 'There’s a feature of the font that I don’t like. Could you change it?',
          value: 'Probably not. You can always use a different font. 😛 (Or <a href="https://github.com/rubjo/victor-mono/issues/new" target="_blank">open an issue</a> and describe what needs changing.)',
          category: 'Design & features'
        }, {
          title: 'Will you add some stylistic variations, like a slashed zero, sharper brackets etc.?',
          value: '<a href="https://paypal.me/runbjo" target="_blank">I might</a>.',
          category: 'Design & features'
        }, {
          title: 'Will you make a custom style generator, where one can pick the preferred stylistic alternatives and download the corresponding font files?',
          value: 'Probably not. It depends on the reception and <a href="https://paypal.me/runbjo" target="_blank">donations</a>, as this is something I do in my spare time.',
          category: 'Design & features'
        }, {
          title: 'Can I use the font for anything?',
          value: 'Yes. If you\'d like to say thanks, you can <a href="https://paypal.me/runbjo" target="_blank">donate</a>. I\'d also appreciate it if you referred others to this web site rather than serving the font files from elsewhere.',
          category: 'Usage'
        }, {
          title: 'How do I use it?',
          value: '1) <a href="#download">Download</a> the font<br>2) Unpack the ZIP<br>3) <a href="https://www.google.com/search?q=how+to+install+fonts" target="_blank">Install</a> the font<br>4) Change the font settings in your code editor / IDE of choice to "Victor Mono".',
          category: 'Usage'
        }, {
          title: 'I found a bug. Where do I report it?',
          value: 'Please <a href="https://github.com/rubjo/victor-mono/issues/new" target="_blank">open an issue</a>.',
          category: 'Usage'
        }, {
          title: 'Since it’s called Victor Mono, will a Victor Sans or Serif be released in the future?',
          value: 'Probably not.',
          category: 'Other'
        }, {
          title: 'How does one simply make a font?',
          value: 'Trial and error, some research, good software, patience and time.',
          category: 'Other'
        }, {
          title: 'Why are you giving it away?',
          value: 'I originally planned on selling it for some (smaller or much larger) sum, like others do. But I eventually decided against it: I couldn’t be bothered to set up hosting, payment, EULAs etc, nor do I have time for the level of support I feel should accompany a commercial product. This typeface isn’t meant to be the perfect font for anyone - I just made the one perfect for me. If you’re unemployed or struggle to make ends meet, download the font with a clear conscience. If you work in a corporate setting or are relatively well off, consider <a href="https://paypal.me/runbjo" target="_blank">supporting</a> the hours spent designing this font. If you want to and are able to donate anything: thank you!',
          category: 'Other'
        }, {
          title: 'Did you know that the [insert typeface property here] violates some 500-year old font design convention?',
          value: 'I might. If I did, I didn’t care, or I deliberately chose to go a different direction.',
          category: 'Design & features'
        }, {
          title: 'The font is missing an obscure ligature symbol used for indicating an infinite loop in the language Goskell when writing in ancient Ghiscari. Would you be willing to add it?',
          value: 'Not very likely, but <a href="https://paypal.me/runbjo" target="_blank">I might</a>.',
          category: 'Design & features'
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
        window.addEventListener(event, throttle(this.setHeaderHeight, 250))
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
      if (top !== triggerHeight) {
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
        this.$refs.header.$el.style.webkitPosition = 'sticky'
        this.$refs.header.$el.style.position = 'sticky'
        this.$refs.header.$el.style.position = '-webkit-sticky'
        document.querySelector('body').style.paddingTop = 0
      } else {
        document.querySelector('body').style.paddingTop = headerHeight + 'px'
        this.$refs.header.$el.style.webkitPosition = 'absolute'
        this.$refs.header.$el.style.position = 'absolute'
        this.$refs.header.$el.style.top = 0
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
        this.showGoToTop = true
      } else {
        this.showHeaderText = true
        this.showGoToTop = false
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
  padding: 10px 10px 40px 10px;
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

code {
  padding: 6px;
  font-style: normal;
  background: var(--background-color-alternate);
  border-radius: 6px;
  transition: background 1s;
}

.content section.faq {
  padding: 0;
  font-size: 1.1em;
  .faq-wrapper {
    max-width: none;
    p {
      font-size: 85%;
      line-height: 170%;
    }
    .faq__nav-item {
      font-weight: inherit;
      color: inherit;
      transition: inherit;
      &.faq__nav-item_active {
        font-style: italic;
      }
      &:hover {
        color: var(--color-text-accented);
      }
    }
    .accordion__toggle-button[data-v-36e025b4] {
      &::before,
      &::after {
        background: var(--color-text-primary);
        transition: background 1s;
      }
    }
    .accordion__title {
      padding: 20px 0 10px 0;
      color: inherit;
      transition: inherit;
      &:hover {
        color: var(--color-text-accented);
        .accordion__toggle-button[data-v-36e025b4] {
          &::before,
          &::after {
            background: var(--color-text-accented);
          }
        }
      }
      button {
        padding-left: 20px;
        margin-left: 5vw;
      }
    }
    .accordion__value {
      padding: 0 25px 25px 50px;
      color: inherit;
    }
  }
}
</style>
