import Vue from 'vue'
import { Row, Col, Button, Tooltip } from 'element-ui'
import '../styles/element-variables.scss'
import 'element-ui/lib/theme-chalk/display.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Row, { locale })
Vue.use(Col, { locale })
Vue.use(Button, { locale })
Vue.use(Tooltip, { locale })
