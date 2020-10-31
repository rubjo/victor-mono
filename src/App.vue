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
      :theme="theme"
    />
    <div class="initial content">
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="22"
          :sm="18"
        >
          <p>
            <a
              v-if="theme === 'dark'"
              :href="stylesDark"
              target="_blank"
            >
              <img
                :src="stylesDarkThumb"
                class="styles-image dark"
              >
            </a>
            <a
              v-else
              :href="stylesLight"
              target="_blank"
            >
              <img
                :src="stylesLightThumb"
                class="styles-image light"
              >
            </a>
            Victor Mono is an open-source monospaced font with optional
            <em>semi-connected cursive italics</em> and programming
            symbol ligatures.
            <br><br>
            The typeface is clean, crisp and narrow, with a large x-height and clear punctuation,
            making it legible and ideal for code. It comes in seven weights and
            Roman, <em>Italic</em> and <em class="alt">Oblique</em> styles.
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="content code-segment">
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
        class="negative-margins"
      >
        <el-col
          :sm="18"
        >
          <CodeView
            :theme="theme"
          />
        </el-col>
      </el-row>
    </div>

    <div
      ref="ligatures"
      class="content alternate-bg"
    >
      <div
        id="ligatures"
        class="scroll-head"
      />
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>Ligatures&nbsp;</em>
            <el-button
              class="normal"
              type=""
              @click="toggleLigatures"
            >
              <em>enabled</em>
            </el-button>
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
          <div class="ligature-samples">
            <h1 class="no-margin centre crossfade visible">
              &lt;/ &lt;/&gt; /&gt; ~- -~ ~@
              &lt;~ &lt;~&gt; &lt;~~ ~&gt; ~~ ~~&gt;
              &gt;= &lt;= &lt;!-- ## ### #### |- -| |-&gt; &lt;-| &gt;-| |-&lt;
              |= |=&gt; &gt;- &lt;- &lt;-- --&gt; -&gt; -&lt;
              &gt;-&gt; &gt;&gt;- &lt;&lt;- &lt;-&gt; -&gt;&gt; -&lt;&lt; &lt;-&lt;
              ==&gt; =&gt; =/= !== != &lt;==
              &gt;&gt;= =&gt;&gt; &gt;=&gt; &lt;=&gt; &lt;=&lt; &lt;&lt;= =&lt;&lt;
              .- .= =:= =!= == === :: := :&gt; :&lt; &gt;: ;;
              &lt;| &lt;|&gt; |&gt; &lt;&gt;
              &lt;$ &lt;$&gt; $&gt; &lt;+ &lt;+&gt; +&gt;
              ?= /= /== /\ \/ __ && ++ +++
            </h1>
            <h1 class="no-margin centre crossfade hidden no-ligatures">
              &lt;/ &lt;/&gt; /&gt; ~- -~ ~@
              &lt;~ &lt;~&gt; &lt;~~ ~&gt; ~~ ~~&gt;
              &gt;= &lt;= &lt;!-- ## ### #### |- -| |-&gt; &lt;-| &gt;-| |-&lt;
              |= |=&gt; &gt;- &lt;- &lt;-- --&gt; -&gt; -&lt;
              &gt;-&gt; &gt;&gt;- &lt;&lt;- &lt;-&gt; -&gt;&gt; -&lt;&lt; &lt;-&lt;
              ==&gt; =&gt; =/= !== != &lt;==
              &gt;&gt;= =&gt;&gt; &gt;=&gt; &lt;=&gt; &lt;=&lt; &lt;&lt;= =&lt;&lt;
              .- .= =:= =!= == === :: := :&gt; :&lt; &gt;: ;;
              &lt;| &lt;|&gt; |&gt; &lt;&gt;
              &lt;$ &lt;$&gt; $&gt; &lt;+ &lt;+&gt; +&gt;
              ?= /= /== /\ \/ __ && ++ +++
            </h1>
          </div>
        </el-col>
      </el-row>
    </div>

    <HeroImage
      image="powerline"
      :theme="theme"
    />

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
            When it comes to programming fonts, I prefer something thin, crisp
            and relatively condensed for the code proper,
            complemented with a more <em>informal, flowing and human style</em>
            for things like comments and reserved keywords.
            <br><br>
            In the past, I always ended up looking for something else after
            using a font for a while, because something didn't look right to me.
            So eventually, I started sketching and designing something myself.
            I wanted something that:
            <ul>
              <li>had friendly and distinct italics</li>
              <li>a strict, geometric and readable regular style</li>
              <li>had programming symbol ligatures</li>
              <li>was slender and elegant</li>
              <li>narrow enough to fit a lot of text</li>
              <li>wide enough to be scannable</li>
              <li>looked consistent and professional</li>
            </ul>
            Other stuff (like having a million alternative glyphs or as many
            ligatures as possible) wasn't (and isn't) important.
            Victor Mono is the result. You might like it as well.
            That's brilliant! You might not. That's also fine: use a font
            that works for you. 😛
          </p>
        </el-col>
      </el-row>
    </div>

    <div class="content">
      <div
        id="compare"
        class="scroll-head"
      />
      <Compare :theme="theme" />
    </div>

    <div class="alternate-bg">
      <HeroImage
        image="keyboard"
        :theme="theme"
        suffix="jpg"
      />
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :sm="18"
        >
          <div class="right caption">
            Two-flavour designs currently being considered by
            <a
              href="http://wasdkeyboards.com"
              target="_blank"
            >
              WASD Keyboards
            </a>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="content alternate-bg">
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
            If you try it out and like it, I would be very grateful for any donations
            or purchases from the Victor Mono Merch Shop
            (<a
              href="https://shop.spreadshirt.com/victor-mono/"
              target="_blank"
            >North America</a>
            /
            <a
              href="https://shop.spreadshirt.net/victor-mono/"
              target="_blank"
            >Europe</a>).
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
            class="download-link"
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
    </div>

    <div>
      <a
        href="https://shop.spreadshirt.com/victor-mono/"
        target="_blank"
      >
        <HeroImage
          image="merch"
          :theme="theme"
          suffix="jpg"
        />
      </a>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :sm="18"
        >
          <div class="right caption">
            Buy cool merch at Victor Mono Merch Store:
            <a
              href="https://shop.spreadshirt.com/victor-mono/"
              target="_blank"
            >
              North America</a>
            /
            <a
              href="https://shop.spreadshirt.net/victor-mono/"
              target="_blank"
            >
              Europe</a>
          </div>
        </el-col>
      </el-row>
    </div>

    <div
      id="how"
      class="scroll-head"
    />
    <div class="content">
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>How to use</em>
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
          <p class="">
            1) <a
              class="download-link"
              href="VictorMonoAll.zip"
            >Download</a> the font<br>
            2) Unpack the ZIP<br>
            3) <a
              href="https://www.google.com/search?q=how+to+install+fonts"
              target="_blank"
            >Install</a> the font (all styles or the ones you want)<br>
            4) <a
              href="https://www.google.com/search?q=how+to+change+font+settings+in+VS+Code"
              target="_blank"
            >Change the font settings in your code editor / IDE of choice</a> to "Victor
            Mono"<br>
            5) <em>Optional</em> &middot; <a
              href="https://www.google.com/search?q=how+to+change+theme+in+VS+Code"
              target="_blank"
            >Set the code theme</a> to one you like<br>
            6) <em>Optional</em> &middot; <a
              href="https://www.google.com/search?q=how+to+modify+themes+in+VS+Code"
              target="_blank"
            >Modify the theme</a> colours and its application of normal/italic/bold styles
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="content alternate-bg">
      <el-row>
        <el-col>
          <h1 class="centre">
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
          <p />
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
            <em>$2/month or $10-24.99 in total</em>
          </p>
          <div class="centre">
            Thank you to everyone contributing! ❤️
          </div>
          <p />
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
            Emerson Beltrán
          </div>
          <div class="centre supporter">
            Colton Borg
          </div>
          <div class="centre supporter">
            Lady Isak Grozny
          </div>
          <div class="centre supporter">
            K. Bruce Jones
          </div>
          <div class="centre supporter">
            Josh Kraker
          </div>
          <div class="centre supporter">
            Stuart Morris
          </div>
          <div class="centre supporter">
            Lars Rönnbäck
          </div>
          <div class="centre supporter">
            Michael Schore
          </div>
          <div class="centre supporter">
            Christoph Siedentop
          </div>
          <p />
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
            Matthew Anderson
          </div>
          <div class="centre supporter">
            Parker Ault
          </div>
          <div class="centre supporter">
            April Collier
          </div>
          <div class="centre supporter">
            Sven Koschnicke
          </div>
          <div class="centre supporter">
            Elizabeth Marston
          </div>
          <div class="centre supporter">
            Matthew O'Gorman
          </div>
          <div class="centre supporter">
            Emily Price
          </div>
          <div class="centre supporter">
            Justin Slepak
          </div>
          <p />
        </el-col>
      </el-row>
    </div>
    <HeroImage
      image="specimen"
      :theme="theme"
    />
    <Faq />
    <HeroImage
      image="glyphs"
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
import { confetti } from 'dom-confetti'
import Faq from '@/components/Faq'
import Credits from '@/components/Credits'

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    CodeView: lazyLoadComponent({
      componentFactory: () => import('@/components/CodeView'),
      background: localStorage.getItem('theme') === 'light' ? '#f2f2f2' : '#304148',
      height: '80vh',
      loading: Loader
    }),
    HeroImage: lazyLoadComponent({
      componentFactory: () => import('@/components/HeroImage'),
      background: localStorage.getItem('theme') === 'light' ? '#f5f5f5' : '#515151',
      height: '50vw',
      maxHeight: '350px',
      loading: Loader
    }),
    Compare: lazyLoadComponent({
      componentFactory: () => import('@/components/Compare'),
      background: localStorage.getItem('theme') === 'light' ? '#f5f5f5' : '#515151',
      height: '927px',
      maxHeight: 'calc(100vw + 48px)',
      loading: Loader
    }),
    Faq,
    Credits
  },
  data () {
    return {
      showNav: false,
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
        window.addEventListener(event, throttle(this.scrollHandler, 100))
      })
    },
    scrollHandler () {
      const mainTitle = this.$refs.header.$el.querySelector('h1')
      const margin = parseInt(window.getComputedStyle(mainTitle).marginTop)
      const navBarHeight = mainTitle.offsetTop - margin
      const headerHeight = this.$refs.header.$el.offsetHeight
      const triggerHeight = headerHeight - navBarHeight
      this.showNav = window.scrollY > triggerHeight
      this.showGoToTop = window.scrollY > 0
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
    },
    toggleLigatures (e) {
      e.target.innerText = e.target.innerText === 'enabled'
        ? 'disabled'
        : 'enabled'

      this.$refs.ligatures.querySelectorAll('.crossfade').forEach(sample => {
        sample.classList.toggle('hidden')
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'styles/globals.scss';
</style>
