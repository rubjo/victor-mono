<template>
  <div class="negative-margins">
    <el-row>
      <el-col>
        <h1 class="centre">
          <em>Compare it to </em>
          <div class="select-container">
            <div class="select">
              <select ref="otherFontSelect">
                <option
                  v-for="font in fonts"
                  :key="font"
                  :value="font.toLowerCase().split(' ').join('-')"
                >
                  {{ font }}
                </option>
              </select>
            </div>
          </div>
        </h1>
      </el-col>
    </el-row>
    <div class="container">
      <TwentyTwenty
        :before="victorMonoImage"
        :after="otherFontImage"
      />
    </div>
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
</template>
<script>
import TwentyTwenty from 'vue-twentytwenty'

export default {
  name: 'Compare',
  components: {
    TwentyTwenty
  },
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
      otherFont: '',
      fonts: [
        'Anonymous Pro',
        'Cartograph',
        'Cascadia Code',
        'Consolas',
        'Dank Mono',
        'Droid Sans',
        'Fantasque Sans Mono',
        'Fira Code',
        'Hack',
        'Hasklig',
        'Inconsolata',
        'Input',
        'Iosevka',
        'JetBrains Mono',
        'Meslo',
        'Monoid',
        'MonoLisa',
        'Operator Mono',
        'Plex Mono',
        'Roboto Mono',
        'Source Code Pro',
        'Sudo',
        'Ubuntu Mono'
      ]
    }
  },
  computed: {
    victorMonoImage () {
      return require(`../assets/img/comparison/victor-mono-${this.theme}.png`)
    },
    otherFontImage () {
      return this.otherFont
        ? require(`../assets/img/comparison/${this.otherFont}-${this.theme}.png`)
        : ''
    }
  },
  mounted () {
    this.$refs.otherFontSelect.addEventListener('change', e => {
      this.otherFont = e.target.value
    })

    this.pickRandom()
  },
  methods: {
    pickRandom () {
      const index = Math.floor(Math.random() * this.fonts.length)
      this.$refs.otherFontSelect.selectedIndex = index
      this.$refs.otherFontSelect.dispatchEvent(new Event('change'))
    }
  }
}
</script>

<style lang="scss" scoped>
  .select-container {
    display: inline-block;
    width: 220px;
  }

  // Select styling
  .select {
    position: relative;
    top: -5px;
    height: 28px;
    margin-left: 5px;
    line-height: 0.5em;
    &::after {
      position: absolute;
      top: 0;
      right: 10px;
      bottom: 0;
      width: 0;
      height: 0;
      margin: auto;
      pointer-events: none;
      content: '';
      border-color: #fff transparent transparent transparent;
      border-style: solid;
      border-width: 7px 7px 0 7px;
      transition: all 1s;
    }
    &:hover {
      &::after {
        right: 4px;
        transition: all 1s;
      }
    }
    select {
      width: 100%;
      height: 100%;
      padding: 0 16px 0 8px;
      font-size: 0.5em;
      font-style: italic;
      color: var(--text-color);
      cursor: pointer;
      background: transparent;
      border-color: var(--text-color);
      border-width: 2px;
      outline: none;
      box-shadow: none;
      transition-duration: 1s;
      &:hover {
        color: var(--text-color);
        border-color: var(--text-color);
        border-radius: 32px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        transition: all 1s;
        transform: scale(1.1);
      }

      // Disable default styling on ff
      -moz-appearance: none;

      // Disable ugly ass outline on firefox
      &:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
      }

      // Disable default styling on webkit browsers
      -webkit-appearance: none;

      // Disable default arrow on IE 11+
      &::-ms-expand {
        display: none;
      }
    }
  }

  .twentytwenty-container:hover > ::v-deep .twentytwenty-overlay {
    opacity: 0;
  }

  // IE 9 only
  @media all and (min-width: 0\0) and (min-resolution: 0.001dpcm) {
    .select {
      select {
        padding-right: 0;
      }

      &::after,
      &::before {
        display: none;
      }
    }
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
  .twentytwenty-container {
    z-index: 0;
    height: 735px;
    img {
      z-index: auto;
    }
    .twentytwenty-overlay {
      z-index: auto;
    }
    .twentytwenty-handle {
      z-index: auto;
    }
    &:hover > .twentytwenty-overlay {
      opacity: 0 !important;
    }
  }

  [data-theme=light] {
    .select {
      &::after {
        border-color: #000 transparent transparent transparent;
      }
    }
  }
</style>
