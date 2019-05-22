<template>
  <div>
    <div class="window">
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
    <div class="caption">
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
  </div>
</template>
<script>
// language
import 'codemirror/mode/vue/vue.js'
// theme css
import '@/styles/ultimate-dark.css'
// active-line.js
import 'codemirror/addon/selection/active-line.js'
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
// keyMap
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'

export default {
  name: 'CodeView',
  data () {
    return {
      code: `<template>
        <div id="app">
          <h1>My Todo App!</h1>
          <TodoList/>
        </div>
      </template>

      <script>
        import TodoList from './components/TodoList.vue'

        export default {
          components: {
            TodoList
          }
        }
      /script>

      <style lang="scss">
        @import './variables.scss';

        *, *::before, *::after {
          box-sizing: border-box;
        }

        #app {
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.4;
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: $vue-blue;
        }

        h1 {
          text-align: center;
        }
      </style>`,
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
        theme: 'ultimate-dark'
      }
    }
  },
  mounted () {
  },
  methods: {
    onCmReady (cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus (cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange (newCode) {
      console.log('this is new code', newCode)
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
  border: 1px solid #303030;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  .controls {
    height: 34px;
    background: #303030;
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
}

.code {
  font-size: 16px;
  line-height: 1.5em;
}

.caption {
  margin-top: 5px;
  font-size: 0.75em;
  font-style: italic;
  color: #999;
  text-align: right;
  a {
    color: #999;
    text-decoration: none;
    border-bottom: 1px dotted #999;
    transition: color 0.5s, border-color 0.5s;
    &:hover {
      color: #ccc;
      border-bottom: 1px dotted #ccc;
    }
  }
}
</style>
