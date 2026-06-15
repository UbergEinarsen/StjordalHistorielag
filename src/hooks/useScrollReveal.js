import { useEffect } from 'react'

/* Mirrors the design's observeReveals(): any element carrying the
   `.reveal` class fades/slides in once it scrolls into view. Re-runs on
   every route change so freshly-rendered content gets observed. */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
