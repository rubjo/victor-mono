import Vue from 'vue'
import ElementUI from 'element-ui'

// Configure Vue to suppress production tips during tests
Vue.config.productionTip = false

// Use Element UI globally for tests
Vue.use(ElementUI)

// Mock window.application if needed
global.window = global.window || {}
window.application = window.application || {}

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock
