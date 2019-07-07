import './plugins/element.js'
import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollTo'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import SocialSharing from 'vue-social-sharing'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 10000,
  easing: 'ease',
  offset: -200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(VueCodemirror)

Vue.use(SocialSharing)

window.application = new Vue({
  render: h => h(App)
}).$mount('#app')
