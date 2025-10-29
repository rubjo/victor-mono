import lazyLoadComponent from '@/utils/lazy-load-component.js'

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
  observe: jest.fn((element) => {
    // Simulate intersection
    callback([{ intersectionRatio: 0.1, target: element }])
  }),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))

describe('lazy-load-component.js', () => {
  let mockComponentFactory
  let mockLoadingComponent

  beforeEach(() => {
    mockComponentFactory = jest.fn().mockResolvedValue({ name: 'MockComponent' })
    mockLoadingComponent = { name: 'LoadingComponent' }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('returns a function that creates lazy loading configuration', () => {
    const lazyComponent = lazyLoadComponent({
      componentFactory: mockComponentFactory,
      background: '#f0f0f0',
      height: '200px',
      loading: mockLoadingComponent
    })

    expect(typeof lazyComponent).toBe('function')
  })

  it('creates component with correct structure', () => {
    const lazyComponent = lazyLoadComponent({
      componentFactory: mockComponentFactory,
      background: '#f0f0f0',
      height: '200px',
      loading: mockLoadingComponent
    })

    const componentConfig = lazyComponent()
    
    expect(componentConfig).toHaveProperty('component')
    expect(componentConfig).toHaveProperty('loading')
    expect(componentConfig.component).toBeInstanceOf(Promise)
  })

  it('applies correct styles to loading component', async () => {
    const lazyComponent = lazyLoadComponent({
      componentFactory: mockComponentFactory,
      background: '#f0f0f0',
      height: '200px',
      maxHeight: '300px',
      loading: mockLoadingComponent
    })

    const componentConfig = lazyComponent()
    const loadingComponent = componentConfig.loading

    // Mock DOM element
    const mockElement = {
      style: {}
    }

    // Create a mock Vue instance
    const mockVueInstance = {
      $el: mockElement
    }

    // Call mounted method
    await loadingComponent.mounted.call(mockVueInstance)

    expect(mockElement.style.backgroundColor).toBe('#f0f0f0')
    expect(mockElement.style.height).toBe('200px')
    expect(mockElement.style.maxHeight).toBe('300px')
  })

  it('loads component immediately when IntersectionObserver is not supported', async () => {
    // Temporarily remove IntersectionObserver
    const originalIntersectionObserver = global.IntersectionObserver
    delete global.IntersectionObserver

    const lazyComponent = lazyLoadComponent({
      componentFactory: mockComponentFactory,
      background: '#f0f0f0',
      height: '200px',
      loading: mockLoadingComponent
    })

    const componentConfig = lazyComponent()
    const loadingComponent = componentConfig.loading

    const mockElement = { style: {} }
    const mockVueInstance = { $el: mockElement }

    await loadingComponent.mounted.call(mockVueInstance)

    expect(mockComponentFactory).toHaveBeenCalled()

    // Restore IntersectionObserver
    global.IntersectionObserver = originalIntersectionObserver
  })

  it('uses default values when options are not provided', async () => {
    const lazyComponent = lazyLoadComponent({
      componentFactory: mockComponentFactory,
      loading: mockLoadingComponent
    })

    const componentConfig = lazyComponent()
    const loadingComponent = componentConfig.loading

    const mockElement = { style: {} }
    const mockVueInstance = { $el: mockElement }

    await loadingComponent.mounted.call(mockVueInstance)

    expect(mockElement.style.backgroundColor).toBe('#595959')
    expect(mockElement.style.height).toBe(0)
    expect(mockElement.style.maxHeight).toBe('auto')
  })

  it('sets up IntersectionObserver when supported', async () => {
    const lazyComponent = lazyLoadComponent({
      componentFactory: mockComponentFactory,
      background: '#f0f0f0',
      height: '200px',
      loading: mockLoadingComponent
    })

    const componentConfig = lazyComponent()
    const loadingComponent = componentConfig.loading

    const mockElement = { style: {} }
    const mockVueInstance = { $el: mockElement }

    await loadingComponent.mounted.call(mockVueInstance)

    expect(global.IntersectionObserver).toHaveBeenCalled()
    expect(mockComponentFactory).toHaveBeenCalled()
  })
})
