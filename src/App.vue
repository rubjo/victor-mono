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
        >
          <p class="columns">
            Victor Mono is a free programming font with
            <em>semi-connected cursive italics</em>,
            symbol ligatures (!=, ->>, =>, ===, &lt;=, &gt;= ++)
            and Latin, Cyrillic and Greek characters.
            <br><br>
            It was drawn from scratch as a pet project / experiment
            <a
              v-scroll-to="'#why'"
              href="javascript:void(0)"
            >because there just wasn't any</a>
            free or paid font that I found both readable, effective and elegant.
            <br><br>
            <img
              v-if="theme === 'dark'"
              :src="stylesDarkThumb"
              :data-original="stylesDark"
              class="styles-image dark"
            >
            <img
              v-else
              :src="stylesLightThumb"
              :data-original="stylesLight"
              class="styles-image light"
            >
            The typeface is clean, crisp and narrow, with a large x-height and clear punctuation,
            making it legible and ideal for code. It comes in seven weights,
            and is available in Roman, <em>Italic</em> and <em class="alt">Oblique</em> styles.
            <br><br>
          </p>
          <p class="centre">
            <em>
              If you try it, like it and want to say thanks, any
              <a
                href="javascript:void(0)"
                class="donate"
                @click="paypal"
              >PayPal</a>
              or
              <a
                href="javascript:void(0)"
                class="donate"
                @click="patreon"
              >Patreon</a>
              donation is very welcome.
            </em>
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="content alternate-bg">
      <div
        id="try"
        class="scroll-head"
      />
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="18"
        >
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
        >
          <CodeView
            :theme="theme"
          />
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
        >
          <p class="small centre">
            <em>Test and compare free programming fonts on
              <a
                target="_blank"
                href="https://app.programmingfonts.org#victor-mono"
              >
                app.programmingfonts.org</a>
            </em>
            ⭐️
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div
        id="ligatures"
        class="scroll-head"
      />
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>Ligatures</em>
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
        >
          <h2>
            --&gt; -| -&gt; -&gt;&gt; -&lt; -&lt;&lt; -~ .- .= :: := :&gt; :&lt; ;; != !== ?= ## ### ####
            /= /== /&gt; /\ \/ __ && |- |-&gt; |= |=&gt; |&gt; $&gt; ++ +++ +&gt; =:= =!= == ===
            ==&gt; =&gt; =&gt;&gt; =&lt;&lt; =/= &gt;- &gt;-&gt; &gt;: &gt;= &gt;=&gt; &gt;&gt;- &gt;&gt;= &lt;- &lt;-- &lt;-&gt; &lt;-&lt; &lt;!--
            &lt;| &lt;|&gt; &lt;$ &lt;$&gt; &lt;+ &lt;+&gt; &lt;= &lt;== &lt;=&gt; &lt;=&lt; &lt;&gt; &lt;&lt;- &lt;&lt;= &lt;~ &lt;~&gt; &lt;~~ &lt;/ &lt;/&gt; ~-
            ~@ ~&gt; ~~ ~~&gt;
          </h2>
        </el-col>
      </el-row>
    </div>

    <div class="content alternate-bg">
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
        >
          <p class="columns">
            When it comes to programming fonts, I prefer something strict, readable and relatively
            condensed for the code proper, complemented with a more
            <em>informal, flowing and human style</em>
            for things like comments and reserved keywords.
            <br><br>
            I've tried lots of alternatives, each with their strengths (Operator Mono: the pricey
            and hip original, Dank Mono: the cheaper one with a wide, younger look, Fira
            Code with the ligatures I use plus a zillion more, compressed and endlessly
            customisable Pragmata or Monoid - the list goes on). However, I always ended up
            rejecting the fonts I tried because something didn't look right to me:
            <ul>
              <li>No cursive italics</li>
              <li>Regular/Roman style was not to my taste</li>
              <li>No programming symbol ligatures</li>
              <li>Too heavy and inelegant</li>
              <li>Too light and straining to read</li>
              <li>Too wide/spaced and wasted space</li>
              <li>Too narrow and hard to scan</li>
              <li>Seemed unfinished in some way</li>
              <li>Seemed childish or unprofessional</li>
              <li>Seemed imbalanced or inconsistent</li>
              <li>Combined two fonts too different in style</li>
              <li>Very expensive</li>
            </ul>
            So eventually, I started making something myself. The resulting typeface, although still
            a work in progress, feels right to me.
            <br><br>
            You might like it as well. That's brilliant! You might not. That's also fine: use a font
            that works for you. 😛
          </p>
        </el-col>
      </el-row>
    </div>
    <HeroImage
      image="glyphs"
      :theme="theme"
    />
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
        >
          <p>
            If you try it out and like it, I would be very grateful for any donations.
            It means I can cover some costs for software and time spent - and keep refining and extending the font.
          </p>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col class="centre">
          <a
            class="donate"
          >
            <el-button
              icon="el-icon-medal-1"
              class="double-line margin-bottom"
              type="success"
              @click="paypal"
            >
              Donate<br>
              <em>via PayPal</em>
            </el-button>
          </a>
          &nbsp;
          <a
            class="donate"
          >
            <el-button
              icon="el-icon-medal-1"
              class="double-line margin-bottom"
              type="success"
              @click="patreon"
            >
              Support<br>
              <em>via Patreon</em>
            </el-button>
          </a>
          &nbsp;
          <a
            id="download-link"
            href="VictorMonoAll.zip"
          >
            <el-button
              icon="el-icon-download"
              class="double-line margin-bottom"
              type="info"
            >
              Download<br>
              <em>~5MB ZIP</em>
            </el-button>
          </a>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="12"
          :lg="10"
        >
          <p class="small centre">
            <em>With
              <a
                target="_blank"
                href="https://github.com/Homebrew/homebrew-cask-fonts"
              >
                homebrew-cask-fonts</a>,
              just run
            </em>
            <br>
            <code>brew tap homebrew/cask-fonts</code><br>
            <code>brew cask install font-victor-mono</code>
          </p>
        </el-col>
        <el-col
          :xs="22"
          :sm="12"
          :lg="10"
        >
          <p class="small centre">
            <em>For use in apps, web pages or other projects:</em>
            <br>
            <code>npm i victormono</code>
            ->
            <code>import 'victormono'</code>
            <br>
            Style elements with <code>font-family: 'Victor Mono'</code>
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <h1 class="centre no-padding">
            <em>Supporters</em>
          </h1>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col
          :xs="24"
          :sm="12"
          :md="6"
          class="margin-bottom"
        >
          <p class="centre no-padding no-margin-bottom">
            <img
              class="medal"
              src="./assets/img/bronze.png"
            >
          </p>
          <h2 class="centre no-margin">
            Bronze<br>
            <div class="small">
              Fan
            </div>
          </h2>
          <p class="small centre no-padding">
            <em>$1/month or - $9.99 in total</em>
          </p>
          <div class="centre">
            Thank you to everyone contributing! ❤️
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="6"
          class="margin-bottom"
        >
          <p class="centre no-padding no-margin-bottom">
            <img
              class="medal"
              src="./assets/img/silver.png"
            >
          </p>
          <h2 class="centre no-margin">
            Silver<br>
            <div class="small">
              Supporter
            </div>
          </h2>
          <p class="small centre no-padding">
            <em>$2/month or $10-25 in total</em>
          </p>
          <div class="centre">
            Thank you to everyone contributing! ❤️
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="6"
          class="gold bottom-margin"
        >
          <p class="centre no-padding no-margin-bottom">
            <img
              class="medal"
              src="./assets/img/gold.png"
            >
          </p>
          <h2 class="centre no-margin">
            Gold<br>
            <div class="small">
              Patron
            </div>
          </h2>
          <p class="small centre no-padding">
            <em>$5/month or $25-45 in total</em>
          </p>
          <div class="centre">
            Thank you to:
          </div>
          <div class="centre supporter">
            Colton Borg
          </div>
          <div class="centre supporter">
            Christoph Siedentop
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="6"
          class="rainbow bottom-margin"
        >
          <p class="centre no-padding no-margin-bottom">
            <img
              class="medal"
              src="./assets/img/unicorn.png"
            >
          </p>
          <h2 class="centre no-margin">
            Rainbow<br>
            <div class="small">
              Champion Guardian Unicorn
            </div>
          </h2>
          <p class="small centre no-padding">
            <em>$10/month or $45+ in total</em>
          </p>
          <div class="centre">
            Thank you to:
          </div>
          <div class="centre supporter">
            April Collier
          </div>
        </el-col>
      </el-row>
    </div>
    <HeroImage
      image="specimen"
      :theme="theme"
    />
    <Faq />
    <HeroImage
      image="powerline"
      :theme="theme"
    />
    <Credits />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import lazyLoadComponent from '@/utils/lazy-load-component.js'
import Loader from '@/components/Loader'
import anime from 'animejs'
import { confetti } from 'dom-confetti'
import Zooming from 'zooming'
import Faq from '@/components/Faq'
import Credits from '@/components/Credits'

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    CodeView: lazyLoadComponent({
      componentFactory: () => import('@/components/CodeView'),
      background: localStorage.getItem('theme') === 'dark' ? '#515151' : '#f5f5f5',
      height: 'calc(75vh + 20px)',
      loading: Loader
    }),
    HeroImage: lazyLoadComponent({
      componentFactory: () => import('@/components/HeroImage'),
      background: localStorage.getItem('theme') === 'dark' ? '#515151' : '#f5f5f5',
      height: '37vw',
      loading: Loader
    }),
    Faq,
    Credits
  },
  data () {
    return {
      showHeaderText: false,
      showNav: true,
      showGoToTop: false,
      theme: localStorage.getItem('theme') || 'dark'
    }
  },
  computed: {
    stylesDarkThumb () { return require('./assets/img/styles-dark-thumb.png') },
    stylesLightThumb () { return require('./assets/img/styles-light-thumb.png') },
    stylesDark () { return require('./assets/img/styles-dark.png') },
    stylesLight () { return require('./assets/img/styles-light.png') }
  },
  mounted () {
    this.initScrollWatcher()
    this.setHeaderHeight()
    this.calculateHeaderText()
    const zoomingDark = new Zooming({
      bgColor: '#333'
    })
    const zoomingLight = new Zooming({
      bgColor: '#ddd'
    })
    zoomingDark.listen('.styles-image.dark')
    zoomingLight.listen('.styles-image.light')
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
    paypal (e) {
      window.open('https://paypal.me/runbjo')
      setTimeout(() => {
        window.addEventListener('focus', this.celebrate(e.target))
      }, 1000)
    },
    patreon (e) {
      window.open('https://www.patreon.com/rune_b')
      setTimeout(() => {
        window.addEventListener('focus', this.celebrate(e.target))
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  @import 'styles/globals.scss';
</style>
