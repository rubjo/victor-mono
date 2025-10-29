import { shallowMount, createLocalVue } from '@vue/test-utils'
import CodeView from '@/components/CodeView.vue'
import VueCodemirror from 'vue-codemirror'

const localVue = createLocalVue()
localVue.use(VueCodemirror)

// Mock CodeMirror
jest.mock('codemirror/mode/vue/vue.js', () => {})
jest.mock('codemirror/mode/javascript/javascript.js', () => {})
jest.mock('codemirror/theme/base16-light.css', () => {})
jest.mock('codemirror/theme/material-darker.css', () => {})

describe('CodeView.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CodeView, {
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
    expect(wrapper.find('.window').exists()).toBe(true)
  })

  it('displays correct theme caption for light theme', () => {
    expect(wrapper.find('.caption').text()).toContain('Base 16 Light')
    expect(wrapper.find('.caption').text()).toContain('Chris Kempson')
  })

  it('displays correct theme caption for dark theme', async () => {
    await wrapper.setProps({ theme: 'dark' })
    expect(wrapper.find('.caption').text()).toContain('Ultimate Dark Neo')
    expect(wrapper.find('.caption').text()).toContain('VS Code')
  })

  it('has correct CodeMirror options for light theme', () => {
    const cmOptions = wrapper.vm.cmOptions
    expect(cmOptions.theme).toBe('base16-light')
    expect(cmOptions.mode).toBe('text/x-vue')
    expect(cmOptions.lineNumbers).toBe(true)
    expect(cmOptions.readOnly).toBe(true)
  })

  it('updates CodeMirror theme when theme prop changes', async () => {
    expect(wrapper.vm.cmOptions.theme).toBe('base16-light')
    
    await wrapper.setProps({ theme: 'dark' })
    expect(wrapper.vm.cmOptions.theme).toBe('material-darker')
  })

  it('contains sample code', () => {
    expect(wrapper.vm.code).toContain('const')
    expect(wrapper.vm.code).toContain('function')
    expect(wrapper.vm.code).toContain('Victor Mono')
  })

  it('has themer.dev link with correct theme parameter', async () => {
    const link = wrapper.find('a[href*="themer.dev"]')
    expect(link.attributes('href')).toContain('activeColorSet=light')
    
    await wrapper.setProps({ theme: 'dark' })
    await wrapper.vm.$nextTick()
    
    const darkLink = wrapper.find('a[href*="themer.dev"]')
    expect(darkLink.attributes('href')).toContain('activeColorSet=dark')
  })
})
