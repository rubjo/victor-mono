import { shallowMount, createLocalVue } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
import VueScrollTo from 'vue-scrollTo'

const localVue = createLocalVue()
localVue.use(VueScrollTo)

// Mock granim
jest.mock('granim', () => {
  return jest.fn().mockImplementation(() => ({
    play: jest.fn(),
    pause: jest.fn()
  }))
})

describe('NavBar.vue', () => {
  let wrapper

  beforeEach(() => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => 'light'),
        setItem: jest.fn(),
        removeItem: jest.fn()
      },
      writable: true
    })

    wrapper = shallowMount(NavBar, {
      localVue,
      propsData: {
        show: true,
        showGoToTop: true
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.navbar').exists()).toBe(true)
  })

  it('shows navbar when show prop is true', () => {
    expect(wrapper.find('.navbar').classes()).toContain('visible')
  })

  it('hides navbar when show prop is false', async () => {
    await wrapper.setProps({ show: false })
    expect(wrapper.find('.navbar').classes()).not.toContain('visible')
  })

  it('shows go-to-top button when showGoToTop is true', () => {
    const goToTopButton = wrapper.find('a[href="#"]')
    expect(goToTopButton.classes()).not.toContain('collapsed')
  })

  it('hides go-to-top button when showGoToTop is false', async () => {
    await wrapper.setProps({ showGoToTop: false })
    const goToTopButton = wrapper.find('a[href="#"]')
    expect(goToTopButton.classes()).toContain('collapsed')
  })

  it('contains all navigation links', () => {
    const links = wrapper.findAll('a')
    const linkTexts = links.wrappers.map(link => link.text())
    
    expect(linkTexts).toContain('Try')
    expect(linkTexts).toContain('Why')
    expect(linkTexts).toContain('Get')
    expect(linkTexts).toContain('How')
    expect(linkTexts).toContain('FAQ')
    expect(linkTexts).toContain('Credits')
  })

  it('has GitHub link with correct href', () => {
    const githubLink = wrapper.find('a[href="https://github.com/rubjo/victor-mono"]')
    expect(githubLink.exists()).toBe(true)
  })

  it('has theme toggle functionality', () => {
    const themeToggle = wrapper.find('.theme-toggle')
    expect(themeToggle.exists()).toBe(true)
  })

  it('emits theme events when toggling', async () => {
    // Test light theme emission
    wrapper.vm.toggleTheme()
    await wrapper.vm.$nextTick()
    
    // Check if appropriate theme event was emitted
    const emittedEvents = wrapper.emitted()
    expect(emittedEvents.lightTheme || emittedEvents.darkTheme).toBeTruthy()
  })

  it('initializes with correct theme from localStorage', () => {
    expect(wrapper.vm.theme).toBe('light')
  })

  it('has canvas element for gradients', () => {
    const canvas = wrapper.find('canvas.navbar-gradients')
    expect(canvas.exists()).toBe(true)
  })

  it('calls spin method on mount', () => {
    const spinSpy = jest.spyOn(NavBar.methods, 'spin')
    shallowMount(NavBar, {
      localVue,
      propsData: {
        show: true,
        showGoToTop: true
      }
    })
    expect(spinSpy).toHaveBeenCalled()
    spinSpy.mockRestore()
  })
})
