<template>
  <div>
    <div
      class="window"
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
      <div class="right caption">
        <span v-if="theme === 'dark'">
          Ultimate Dark Neo code theme for
          <a
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=rubjo.ultimate-dark-neo"
          >VS Code</a>
          or
          <a
            target="_blank"
            href="https://packagecontrol.io/packages/Ultimate%20Dark%20Neo"
          >Sublime Text</a>.
        </span>
        <span v-else>
          Based on
          <a
            target="_blank"
            href="https://github.com/chriskempson/base16"
          >Base 16 Light</a>
          colour scheme by Chris Kempson.
        </span>
        Also check out
        <a
          target="_blank"
          :href="'https://themer.dev/victor-mono?activeColorSet=' + theme"
        >
          themer.dev/victor-mono</a>!
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
}

::v-deep .CodeMirror {
  background: transparent;
}

.code {
  height: calc(100% - 34px);
  font-size: calc(14px + 0.5vw);
  line-height: 1.5em;
}
</style>
