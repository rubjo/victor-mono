<template>
  <div>
    <div
      class="window"
      :class="{ 'light': theme !== 'dark' }"
    >
      <codemirror
        ref="myCm"
        class="code"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
      />
      <div
        v-if="theme === 'dark'"
        class="right caption"
      >
        Based on
        <a
          target="_blank"
          href="https://github.com/voronianski/oceanic-next-color-scheme"
        >Oceanic Next</a>
        colour scheme by Dmitri Voronianski
      </div>
      <div
        v-else
        class="right caption"
      >
        Based on
        <a
          target="_blank"
          href="https://github.com/chriskempson/base16"
        >Base 16 Light</a>
        colour scheme by Chris Kempson
      </div>
    </div>
  </div>
</template>
<script>
// language
import 'codemirror/mode/vue/vue.js'
import 'codemirror/mode/javascript/javascript.js'
// themes css
import '@/styles/oceanic-next.css'
import '@/styles/base-16-light.css'
// active-line.js
import 'codemirror/addon/selection/active-line.js'
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
// keyMap
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'

// sample code
// eslint-disable-next-line
import mobileCode from '!raw-loader!@/components/Sample-mobile.vue'
import desktopCode from '!raw-loader!@/components/Sample-desktop.js'

export default {
  name: 'CodeView',
  props: {
    theme: {
      type: String,
      default: localStorage.getItem('theme') || 'dark'
    }
  },
  data () {
    return {
      code: window.innerWidth <= 768 ? mobileCode : desktopCode,
      cmOptions: {
        mode: window.innerWidth <= 768 ? 'text/x-vue' : 'text/javascript',
        tabSize: 2,
        styleActiveLine: true,
        line: true,
        styleSelectedText: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: this.theme === 'dark' ? 'oceanic-next' : 'base16-light'
      }
    }
  },
  watch: {
    theme (newVal, oldVal) {
      this.cm.setOption('theme', newVal === 'dark' ? 'oceanic-next' : 'base16-light')
    }
  },
  mounted () {
  },
  methods: {
    onCmReady (cm) {
      this.cm = cm
      cm.setSize('100%', '100%')
    },
    onCmFocus (cm) {
    },
    onCmCodeChange (newCode) {
      this.code = newCode
    }
  }
}

</script>
<style
  scoped
  lang="scss"
>
.window {
  position: relative;
  z-index: 0;
  height: 80vh;
  .controls {
    height: 34px;
    background: #303030;
    transition: background 1s;
    div {
      float: left;
      width: 14px;
      height: 14px;
      margin: 10px 0 0 10px;
      background: #999;
      border-radius: 50%;
    }
    .close {
      background: #ff544e;
    }
    .min {
      background: #feb429;
    }
    .max {
      background: #26c138;
    }
    .theme-toggle {
      float: right;
      margin-right: 10px;
      font-size: 0.8em;
      line-height: 2.7em;
      text-decoration: none;
    }
  }
  &.light {
    border-color: #ccc;
    .controls {
      background: #eee;
    }
  }
}

.code {
  height: calc(100% - 34px);
  font-size: calc(14px + 0.45vw);
  line-height: 1.5em;
}
</style>
