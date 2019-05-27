import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollTo'
import './plugins/element.js'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 5000,
  easing: 'ease',
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(VueCodemirror)

window.application = new Vue({
  render: h => h(App)
}).$mount('#app')
