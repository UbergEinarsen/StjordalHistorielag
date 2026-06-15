import { useNavigate } from 'react-router-dom'
import { SecOrn } from './common.jsx'

/* Shared dark sub-page hero with breadcrumb, ornament, title and subtitle.
   `crumbs` = [{ label, to? }] — entries with `to` are links, the last
   (current) entry is rendered as plain gold text. */
export default function PageHero({ bg, crumbs = [], title, sub }) {
  const navigate = useNavigate()
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={bg ? { backgroundImage: `url('${bg}')` } : undefined}></div>
      <div className="page-hero-inner">
        <nav className="breadcrumb">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1
            return (
              <span key={i} style={{ display: 'contents' }}>
                {c.to && !last ? (
                  <a onClick={() => navigate(c.to)}>{c.label}</a>
                ) : (
                  <span className="current">{c.label}</span>
                )}
                {!last && <span className="sep">/</span>}
              </span>
            )
          })}
        </nav>
        <SecOrn />
        <h1 className="page-hero-title">{title}</h1>
        {sub && <p className="page-hero-sub">{sub}</p>}
      </div>
    </section>
  )
}
