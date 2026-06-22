import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown } from './icons.jsx'
import logoImg from '../images/stjordal_historielag_logo.png'

/* Maps the current pathname's first segment to the nav item that should
   be highlighted (detail/gallery views fall back to their parent). */
function activeRouteFor(pathname) {
  const seg = pathname.split('/').filter(Boolean)[0] || 'home'
  if (seg === 'artikkel') return 'artikler'
  if (seg === 'galleri') return 'album'
  return seg
}

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolledPast, setScrolledPast] = useState(window.scrollY > 60)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const itemRef = useRef(null)

  const active = activeRouteFor(location.pathname)
  const isHome = active === 'home'
  const overHero = isHome && !scrolledPast

  // Track scroll to swap the nav between transparent (over hero) and frosted.
  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus whenever the route changes.
  useEffect(() => {
    setDropdownOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  // Close the dropdown on an outside click.
  useEffect(() => {
    if (!dropdownOpen) return
    const onDown = (e) => {
      if (itemRef.current && !itemRef.current.contains(e.target)) setDropdownOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [dropdownOpen])

  const navClass = 'site-nav ' + (overHero ? 'over-hero' : 'scrolled')

  const NavA = ({ to, route, children }) => (
    <Link to={to} className={route === active ? 'active' : undefined}>
      {children}
    </Link>
  )

  return (
    <nav className={navClass} id="site-nav">
      <div className="nav-inner">
        <a
          href="#/"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          <img src={logoImg} alt="Stjørdal Historielag logo" className="logo-mark" />
          <div className="logo-text">
            <span className="logo-title">Stjørdal Historielag</span>
            <span className="logo-sub">Stiftet 1977</span>
          </div>
        </a>

        <ul className={'nav-links' + (mobileOpen ? ' open' : '')} id="nav-links">
          <li><NavA to="/" route="home">Hjem</NavA></li>
          <li><NavA to="/artikler" route="artikler">Artikler</NavA></li>
          <li><NavA to="/album" route="album">Album</NavA></li>
          <li><NavA to="/kalender" route="kalender">Kalender</NavA></li>
          <li><NavA to="/publikasjoner" route="publikasjoner">Publikasjoner</NavA></li>
          <li className={'nav-item' + (dropdownOpen ? ' open' : '')} ref={itemRef}>
            <button
              className="nav-trigger"
              onClick={(e) => {
                e.stopPropagation()
                setDropdownOpen((o) => !o)
              }}
            >
              Om oss
              <ChevronDown />
            </button>
            <div className="nav-dropdown">
              <Link to="/om-oss/aktiviteter">Aktiviteter</Link>
              <Link to="/om-oss/foreningsdrift">Foreningsdrift</Link>
              <Link to="/om-oss/vedtekter">Vedtekter</Link>
              <Link to="/om-oss/historie">Lagets historie</Link>
            </div>
          </li>
          <li><NavA to="/kontakt" route="kontakt">Kontakt</NavA></li>
        </ul>

        <button className="nav-burger" aria-label="Meny" onClick={() => setMobileOpen((o) => !o)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/kontakt" className="nav-cta">Bli medlem</Link>
      </div>
    </nav>
  )
}
