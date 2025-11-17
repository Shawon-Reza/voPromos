import { useEffect } from 'react'

/**
 * AutoReveal — observe elements with `reveal-on-scroll` and toggle classes
 * so they animate when entering the viewport and replay when re-entering.
 */
const AutoReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const options = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        if (entry.isIntersecting) {
          // reveal using inline styles so it does not depend on Tailwind classes
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        } else {
          // hide so animation can replay on re-entry
          el.style.opacity = '100'
          el.style.transform = 'translateY(24px)'
        }
      })
    }, options)

    const initNode = (el) => {
      if (!el.classList.contains('reveal-initialized')) {
        // initialize with inline styles for broad compatibility
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
        el.style.transition = 'all 700ms ease-out'
        el.classList.add('reveal-initialized')
        observer.observe(el)
        // if element is currently in the viewport, reveal immediately
        try {
          const rect = el.getBoundingClientRect()
          const inView = rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.9 && rect.bottom > 0
          if (inView) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        } catch (e) {
          // ignore (e.g., SSR environment)
        }
      }
    }

    // initialize existing nodes
    const nodes = document.querySelectorAll('.reveal-on-scroll')
    nodes.forEach(initNode)

    // watch for new nodes being added
    const mo = new MutationObserver(() => {
      document.querySelectorAll('.reveal-on-scroll:not(.reveal-initialized)').forEach(initNode)
    })

    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}

export default AutoReveal
