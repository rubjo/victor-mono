import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import VueScrollTo from 'vue-scrollTo'

const localVue = createLocalVue()
localVue.use(VueScrollTo)

// Mock all the heavy components
jest.mock('@/components/NavBar', () => ({ name: 'NavBar', template: '<div class="navbar-mock"></div>' }))
jest.mock('@/components/Header', () => ({ name: 'Header', template: '<div class="header-mock"></div>' }))
jest.mock('@/components/CodeView', () => ({ name: 'CodeView', template: '<div class="codeview-mock"></div>' }))
jest.mock('@/components/Testimonials', () => ({ name: 'Testimonials', template: '<div class="testimonials-mock"></div>' }))
jest.mock('@/components/Faq', () => ({ name: 'Faq', template: '<div class="faq-mock"></div>' }))

// Mock lazy loading utility
jest.mock('@/utils/lazy-load-component.js', () => {
  return jest.fn(() => () => ({
    name: 'MockLazyComponent',
    template: '<div class="lazy-mock"></div>'
  }))
})

// Mock dom-confetti
jest.mock('dom-confetti', () => ({
  confetti: jest.fn()
}))

describe('App.vue', () => {
  let wrapper

  beforeEach(() => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => 'light'),
        setItem: jest.fn()
      },
      writable: true
    })

    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true
    })

    wrapper = shallowMount(App, {
      localVue,
      stubs: {
        'el-row': true,
        'el-col': true,
        'el-button': true
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('#app').exists()).toBe(true)
  })

  it('initializes with correct default data', () => {
    expect(wrapper.vm.theme).toBe('light')
    expect(wrapper.vm.showNav).toBe(false)
    expect(wrapper.vm.showGoToTop).toBe(false)
  })

  it('contains main navigation components', () => {
    expect(wrapper.findComponent({ name: 'NavBar' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'Header' }).exists()).toBe(true)
  })

  it('has main content sections', () => {
    expect(wrapper.find('.content').exists()).toBe(true)
    expect(wrapper.find('.code-segment').exists()).toBe(true)
    expect(wrapper.find('.alternate-bg').exists()).toBe(true)
  })

  it('displays Victor Mono description', () => {
    const description = wrapper.text()
    expect(description).toContain('Victor Mono is an open-source monospaced font')
    expect(description).toContain('semi-connected cursive italics')
    expect(description).toContain('programming symbol ligatures')
  })

  it('has scroll anchors for navigation', () => {
    expect(wrapper.find('#try').exists()).toBe(true)
    expect(wrapper.find('#ligatures').exists()).toBe(true)
    expect(wrapper.find('#download').exists()).toBe(true)
  })

  it('responds to theme changes from navbar', async () => {
    const navbar = wrapper.findComponent({ name: 'NavBar' })
    
    // Simulate dark theme event
    navbar.vm.$emit('darkTheme')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.theme).toBe('dark')

    // Simulate light theme event
    navbar.vm.$emit('lightTheme')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.theme).toBe('light')
  })

  it('has computed properties for style assets', () => {
    expect(wrapper.vm.stylesDarkThumb).toBeDefined()
    expect(wrapper.vm.stylesLightThumb).toBeDefined()
    expect(wrapper.vm.stylesDark).toBeDefined()
    expect(wrapper.vm.stylesLight).toBeDefined()
  })

  it('displays correct style image based on theme', async () => {
    // Light theme
    expect(wrapper.find('.styles-image.light').exists()).toBe(true)
    expect(wrapper.find('.styles-image.dark').exists()).toBe(false)

    // Dark theme
    await wrapper.setData({ theme: 'dark' })
    expect(wrapper.find('.styles-image.dark').exists()).toBe(true)
    expect(wrapper.find('.styles-image.light').exists()).toBe(false)
  })

  it('has scroll handler method', () => {
    expect(typeof wrapper.vm.scrollHandler).toBe('function')
  })

  it('has celebrate method for confetti effect', () => {
    expect(typeof wrapper.vm.celebrate).toBe('function')
  })

  it('has payment methods', () => {
    expect(typeof wrapper.vm.paypal).toBe('function')
    expect(typeof wrapper.vm.patreon).toBe('function')
  })

  it('has ligatures toggle functionality', () => {
    expect(typeof wrapper.vm.toggleLigatures).toBe('function')
  })

  it('initializes scroll watcher on mount', () => {
    const initScrollWatcherSpy = jest.spyOn(wrapper.vm, 'initScrollWatcher')
    wrapper.vm.$options.mounted[0].call(wrapper.vm)
    expect(initScrollWatcherSpy).toHaveBeenCalled()
  })
})
