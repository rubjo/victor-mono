<template>
  <div>
    <div
      class="window"
      :class="{ 'light': theme !== 'dark' }"
    >
      <div class="controls">
        <el-tooltip
          class="item"
          effect="dark"
          content="Not an actual window :P"
          placement="top-start"
        >
          <span>
            <div class="close" />
            <div class="min" />
            <div class="max" />
          </span>
        </el-tooltip>
      </div>
      <codemirror
        ref="myCm"
        class="code"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
      />
    </div>
    <div
      v-if="theme === 'dark'"
      class="right caption"
    >
      Based on
      <a
        target="_blank"
        href="https://github.com/rubjo/ultimate-dark"
      >Ultimate Dark</a>
      colour scheme
      (<a
        target="_blank"
        href="https://packagecontrol.io/packages/Ultimate%20Dark"
      >Sublime Text 3 package</a>)
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
</template>
<script>
// language
import 'codemirror/mode/vue/vue.js'
// themes css
import '@/styles/ultimate-dark.css'
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
import code from '!raw-loader!@/components/Sample.vue'

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
      code,
      cmOptions: {
        mode: 'text/x-vue',
        tabSize: 2,
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        line: true,
        styleSelectedText: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: this.theme === 'dark' ? 'ultimate-dark' : 'base16-light'
      }
    }
  },
  watch: {
    theme (newVal, oldVal) {
      this.cm.setOption('theme', newVal === 'dark' ? 'ultimate-dark' : 'base16-light')
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
  height: 75vh;
  border: 1px solid #303030;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: border 1s;
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
  font-size: calc(12px + 0.45vw);
  line-height: 1.5em;
}
</style>
