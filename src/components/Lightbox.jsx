import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { img } from '../data.js'
import { CloseIcon, LbPrevIcon, LbNextIcon } from './icons.jsx'

const LightboxContext = createContext(null)

export const useLightbox = () => useContext(LightboxContext)

/* Provides the lightbox overlay + an openLightbox(images, index) action.
   `images` is an array of [pathOrUrl, caption] pairs (raw === absolute url). */
export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, images: [], index: 0, raw: false })

  const openLightbox = useCallback((images, index, raw = false) => {
    setState({ open: true, images, index, raw })
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setState((s) => ({ ...s, open: false }))
    document.body.style.overflow = ''
  }, [])

  const step = useCallback((n) => {
    setState((s) => {
      if (!s.images.length) return s
      return { ...s, index: (s.index + n + s.images.length) % s.images.length }
    })
  }, [])

  useEffect(() => {
    if (!state.open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [state.open, close, step])

  const current = state.images[state.index]
  const src = current ? (state.raw ? current[0] : img(current[0], 1500)) : ''

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <div
        className={'lightbox' + (state.open ? ' open' : '')}
        id="lightbox"
        onClick={(e) => {
          if (e.target.id === 'lightbox') close()
        }}
      >
        <span className="lb-counter">{state.images.length ? `${state.index + 1} / ${state.images.length}` : ''}</span>
        <button className="lb-close" aria-label="Lukk" onClick={close}>
          <CloseIcon />
        </button>
        <button className="lb-btn lb-prev" aria-label="Forrige" onClick={() => step(-1)}>
          <LbPrevIcon />
        </button>
        <div className="lightbox-img-wrap">
          {/* key forces the lb-in animation to replay on each navigation */}
          {current && <img key={state.index} src={src} alt={current[1]} />}
          <p className="lightbox-caption">{current ? current[1] : ''}</p>
        </div>
        <button className="lb-btn lb-next" aria-label="Neste" onClick={() => step(1)}>
          <LbNextIcon />
        </button>
      </div>
    </LightboxContext.Provider>
  )
}
