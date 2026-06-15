import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { LightboxProvider } from './components/Lightbox.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

import Home from './pages/Home.jsx'
import Artikler from './pages/Artikler.jsx'
import ArtikkelDetail from './pages/ArtikkelDetail.jsx'
import Album from './pages/Album.jsx'
import Galleri from './pages/Galleri.jsx'
import Kalender from './pages/Kalender.jsx'
import Publikasjoner from './pages/Publikasjoner.jsx'
import OmOss from './pages/OmOss.jsx'
import Kontakt from './pages/Kontakt.jsx'

export default function App() {
  const location = useLocation()

  // Jump to top on every view change (matches the design's router).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  // Observe scroll-reveal elements for the freshly-rendered view.
  useScrollReveal([location.pathname])

  return (
    <LightboxProvider>
      <Nav />
      {/* keyed so the `view-in` fade replays on each navigation */}
      <main className="view active" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/artikler" element={<Artikler />} />
          <Route path="/artikkel/:id" element={<ArtikkelDetail />} />
          <Route path="/album" element={<Album />} />
          <Route path="/galleri/:id" element={<Galleri />} />
          <Route path="/kalender" element={<Kalender />} />
          <Route path="/publikasjoner" element={<Publikasjoner />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/om-oss/:tab" element={<OmOss />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </LightboxProvider>
  )
}
