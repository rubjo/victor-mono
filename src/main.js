import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollTo'
import './plugins/element.js'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.config.productionTip = false
// test
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -70,
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
