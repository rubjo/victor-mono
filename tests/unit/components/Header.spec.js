import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import VueScrollTo from 'vue-scrollTo'

const localVue = createLocalVue()
localVue.use(VueScrollTo)

// Mock dependencies
jest.mock('typed.js', () => {
  return jest.fn().mockImplementation(() => ({
    destroy: jest.fn()
  }))
})

jest.mock('animejs', () => ({
  timeline: jest.fn(() => ({
    add: jest.fn().mockReturnThis()
  }))
}))

jest.mock('@/utils/init-gradients.js', () => jest.fn())

describe('Header.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue,
      propsData: {
        theme: 'light'
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.header').exists()).toBe(true)
  })

  it('displays main title', () => {
    const title = wrapper.find('h1')
    expect(title.text()).toBe('Victor Mono')
  })

  it('displays subtitle with programming font text', () => {
    const subtitle = wrapper.find('h2')
    expect(subtitle.text()).toContain('programming font')
  })

  it('has video background elements', () => {
    expect(wrapper.find('.video-bg').exists()).toBe(true)
    expect(wrapper.find('video').exists()).toBe(true)
    expect(wrapper.find('source[type="video/mp4"]').exists()).toBe(true)
    expect(wrapper.find('source[type="video/webm"]').exists()).toBe(true)
  })

  it('has canvas for gradients', () => {
    const canvas = wrapper.find('canvas.header-gradients')
    expect(canvas.exists()).toBe(true)
  })

  it('has download button with scroll-to directive', () => {
    const downloadButton = wrapper.find('el-button')
    expect(downloadButton.exists()).toBe(true)
    expect(downloadButton.text()).toContain('Download')
  })

  it('has GitHub link', () => {
    const githubLink = wrapper.find('a[href="https://github.com/rubjo/victor-mono"]')
    expect(githubLink.exists()).toBe(true)
  })

  it('responds to theme prop changes', async () => {
    expect(wrapper.props('theme')).toBe('light')
    
    await wrapper.setProps({ theme: 'dark' })
    expect(wrapper.props('theme')).toBe('dark')
  })

  it('has proper video attributes', () => {
    const video = wrapper.find('video')
    expect(video.attributes('autoplay')).toBeDefined()
    expect(video.attributes('muted')).toBeDefined()
    expect(video.attributes('loop')).toBeDefined()
    expect(video.attributes('playsinline')).toBeDefined()
  })

  it('initializes typed animation on mount', () => {
    // Since we mocked Typed.js, we can verify it was called
    const TypedMock = require('typed.js')
    expect(TypedMock).toHaveBeenCalled()
  })
})
