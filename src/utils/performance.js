// Performance monitoring utilities
export const measurePerformance = (name, fn) => {
  if (typeof performance !== 'undefined') {
    const start = performance.now()
    const result = fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
    return result
  }
  return fn()
}

export const preloadRoute = (routeComponent) => {
  const componentImport = routeComponent()
  if (componentImport && typeof componentImport.then === 'function') {
    componentImport.catch(() => {}) // Prevent unhandled promise rejection
  }
  return componentImport
}

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}