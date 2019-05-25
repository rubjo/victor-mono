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
            I drew it from scratch as a pet project because I couldn’t find another (free or paid) typeface I was entirely satisfied with.
            I tried quite a few.
            <br><br>
            The typeface is quite strict in style and features a large x-height. It's designed for high legibility and maximum niceness at small-to-medium sizes on high-DPI displays on systems that render fonts well.
            <br><br>
            You might like it. That's brilliant! You might not. That's also fine: use a different font. 😛
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <h1
            id="try"
            class="centre"
          >
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
          <CodeView />
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <el-row>
        <el-col>
          <h1
            id="why"
            class="centre"
          >
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
          Coming soon
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <el-row>
        <el-col>
          <h1
            id="download"
            class="centre"
          >
            <em>Download</em>
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
            If you do try it out and like it, I would really appreciate a donation.
            €5 will cover a bottle of beer, €10 a bottle of wine and ~ €750M a Taj Mahal-style residence.
          </p>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
      >
        <el-col class="centre">
          <el-button
            icon="el-icon-medal-1"
            type="primary"
            round
            @click="goTo('https://paypal.me/runbjo')"
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
    <div class="content">
      <el-row>
        <el-col>
          <h1
            id="faq"
            class="centre"
          >
            <em>FAQ</em>
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
    <div class="content">
      <el-row>
        <el-col>
          <h1
            id="credits"
            class="centre"
          >
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
      theme: 'dark'
    }
  },
  mounted () {
    this.calculateScroll()
    this.initScrollWatcher()
  },
  methods: {
    initScrollWatcher () {
      ['scroll', 'resize'].forEach(event => {
        window.addEventListener(event, () => {
          this.calculateScroll()
        })
      })
    },
    calculateScroll () {
      const top = window.scrollY
      const mainTitle = this.$refs.header.$el.querySelector('h1')
      const margin = parseInt(window.getComputedStyle(mainTitle).marginTop)
      const navBarHeight = mainTitle.offsetTop - margin
      const headerHeight = this.$refs.header.$el.offsetHeight
      const triggerHeight = headerHeight - navBarHeight
      if (top > triggerHeight) {
        this.$refs.header.$el.style.top = triggerHeight * -1 + 'px'
        this.showHeaderText = false
      } else {
        this.$refs.header.$el.style.top = top * -1 + 'px'
        this.showHeaderText = true
      }

      const hideStart = mainTitle.getBoundingClientRect().top + margin
      this.showNav = window.scrollY < hideStart || window.scrollY > triggerHeight
    },
    goTo (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss">
@import 'styles/globals.scss';

.content {
  padding: 10px;
}

h1 {
  font-weight: normal;
}
</style>
