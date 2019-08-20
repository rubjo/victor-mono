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
            >because I couldn’t find</a>
            a free or paid font I was entirely satisfied with.
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
                @click="thanks"
              >donation</a>
              is very welcome.
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
            I'm rather particular about what width, weight and style makes an effective and enjoyable typeface for code.
            <br><br>
            All fonts I tried using while coding had several of these shortcomings (<em>subjectively, of course</em>):
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
            So eventually, a few months ago, I started making something myself. The resulting typeface, although still a work in progress, feels right to me.
            <br><br>
            You might like it as well. That's brilliant! You might not. That's also fine: you are free to use a different font. 😛
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
          :sm="16"
          :lg="12"
        >
          <p>
            If you try it out and like it, I would be very grateful for any
            <a
              href="javascript:void(0)"
              class="donate"
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
            class="donate"
          >
            <el-button
              icon="el-icon-medal-1"
              type="success"
              @click="thanks"
            >
              Donate
            </el-button>
          </a>
          &nbsp;
          <a
            id="download-link"
            href="VictorMonoAll.zip"
          >
            <el-button
              icon="el-icon-download"
              type="info"
            >
              Download
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
          :sm="16"
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
            <code>brew tap homebrew/cask-fonts && brew cask install font-victor-mono</code>
            🚀
          </p>
          <p class="small centre">
            <em>For use in apps, web pages or other projects:</em>
            <br>
            <code>npm i victor-mono</code>
            -->
            <code>import 'victor-mono'</code>
            -->
            Style elements with <code>font-family: 'Victor Mono'</code>
            🎆
          </p>
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
    <div class="content">
      <div
        id="languages"
        class="scroll-head"
      />
      <el-row>
        <el-col>
          <h1 class="centre">
            <em>Supported languages</em>
          </h1>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :span="23"
        >
          <p class="extra-small narrow columns">
            Abenaki<br>Afaan Oromo<br>Afar<br>Albanian<br>Alsatian<br>Amis<br>Anuta<br>Aragonese<br>Aranese<br>Aromanian<br>Arrernte<br>Arvanitic (Latin)<br>Asturian<br>Atayal<br>Aymara<br>Bashkir (Latin)<br>Basque<br>Bemba<br>Bikol<br>Bislama<br>Bosnian<br>Breton<br>Cape Verdean Creole<br>Cebuano<br>Chamorro<br>Chavacano<br>Chichewa<br>Chickasaw<br>Cimbrian<br>Cofán<br>Corsican<br>Creek<br>Crimean Tatar (Latin)<br>Croatian<br>Czech<br>Dawan<br>Delaware<br>Dholuo<br>Drehu<br>English<br>Estonian<br>Faroese<br>Fijian<br>Filipino<br>Finnish<br>Folkspraak<br>French<br>Frisian<br>Friulian<br>Gagauz (Latin)<br>Galician<br>Ganda<br>Genoese<br>German<br>Gikuyu<br>Gooniyandi<br>Guadeloupean Creole<br>Gwich’in<br>Haitian Creole<br>Hän<br>Hawaiian<br>Hiligaynon<br>Hopi<br>Hotcąk (Latin)<br>Hungarian<br>Ido<br>Igbo<br>Ilocano<br>Indonesian<br>Interglossa<br>Interlingua<br>Irish<br>Istro-Romanian<br>Italian<br>Jamaican<br>Javanese (Latin)<br>Jèrriais<br>Kaingang<br>Kala Lagaw Ya<br>Kapampangan (Latin)<br>Kaqchikel<br>Karakalpak (Latin)<br>Karelian (Latin)<br>Kashubian<br>Kikongo<br>Kinyarwanda<br>Kiribati<br>Kirundi<br>Klingon<br>Ladin<br>Latin<br>Latino sine Flexione<br>Latvian<br>Lithuanian<br>Lojban<br>Lombard<br>Low Saxon<br>Luxembourgish<br>Maasai<br>Makhuwa<br>Malay<br>Maltese<br>Manx<br>Māori<br>Marquesan<br>Megleno-Romanian<br>Meriam Mir<br>Mirandese<br>Mohawk<br>Moldovan<br>Montagnais<br>Montenegrin<br>Murrinh-Patha<br>Nagamese Creole<br>Ndebele<br>Neapolitan<br>Ngiyambaa<br>Niuean<br>Noongar<br>Norwegian<br>Novial<br>Occidental<br>Occitan<br>Oshiwambo<br>Ossetian (Latin)<br>Palauan<br>Papiamento<br>Piedmontese<br>Polish<br>Portuguese<br>Potawatomi<br>Q’eqchi’<br>Quechua<br>Rarotongan<br>Romanian<br>Romansh<br>Rotokas<br>Sami (Inari Sami)<br>Sami (Lule Sami)<br>Sami (Northern Sami)<br>Sami (Southern Sami)<br>Samoan<br>Sango<br>Saramaccan<br>Sardinian<br>Scottish Gaelic<br>Serbian (Latin)<br>Seri<br>Seychellois Creole<br>Shawnee<br>Shona<br>Sicilian<br>Silesian<br>Slovak<br>Slovenian<br>Slovio (Latin)<br>Somali<br>Sorbian (Lower Sorbian)<br>Sorbian (Upper Sorbian)<br>Sotho (Northern)<br>Sotho (Southern)<br>Spanish<br>Sranan<br>Sundanese (Latin)<br>Swahili<br>Swazi<br>Swedish<br>Tagalog<br>Tahitian<br>Tetum<br>Tok Pisin<br>Tokelauan<br>Tongan<br>Tshiluba<br>Tsonga<br>Tswana<br>Tumbuka<br>Turkish<br>Turkmen (Latin)<br>Tuvaluan<br>Tzotzil<br>Uzbek (Latin)<br>Venetian<br>Vepsian<br>Volapük<br>Võro<br>Wallisian<br>Walloon<br>Waray-Waray<br>Warlpiri<br>Wayuu<br>Welsh<br>Wik-Mungkan<br>Wiradjuri<br>Wolof<br>Xavante<br>Xhosa<br>Yapese<br>Yindjibarndi<br>Zapotec<br>Zulu<br>Zuni<br>
          </p>
        </el-col>
      </el-row>
    </div>
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
</style>
