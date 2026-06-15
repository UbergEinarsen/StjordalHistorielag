import { useNavigate } from 'react-router-dom'
import { ARTICLES, ALBUMS, EVENTS, MONTHS_SHORT, img, artImg } from '../data.js'
import { SecOrn, FolkBorder, onImgError } from '../components/common.jsx'
import { PinIcon } from '../components/icons.jsx'

/* Next 3 upcoming events from today (falls back to the last 3). */
function upcomingEvents() {
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const upcoming = EVENTS.filter((e) => new Date(e.y, e.m, e.d) >= todayStart).sort(
    (a, b) => new Date(a.y, a.m, a.d) - new Date(b.y, b.m, b.d)
  )
  return (upcoming.length ? upcoming : EVENTS.slice(-3)).slice(0, 3)
}

export default function Home() {
  const navigate = useNavigate()
  const go = (to) => navigate(to)
  const events = upcomingEvents()

  // Cards previewed on the home page (fixed selection from the design).
  const previewArticles = ['potetmelfabrikk', 'heggeseth', 'elva'].map((id) => ARTICLES.find((a) => a.id === id))
  const previewAlbumThumbs = [
    { p: '169291/2593368/Stj%c3%b8rdal.jpg', cap: 'Gamle postkort', to: '/galleri/postkort', alt: 'Stjørdal ca. 1920' },
    { p: '169287/2593364/Stj%c3%b8rdal_flyfoto1.jpg', cap: 'Flyfoto over Stjørdal', to: '/galleri/postkort', alt: 'Flyfoto over Stjørdal' },
    { p: '169293/2593370/Stj%c3%b8rdalshalsen_fra_Stokkberga.jpg', cap: 'Stjørdalshalsen fra Stokkberga', to: '/galleri/postkort', alt: 'Stjørdalshalsen fra Stokkberga' },
    { p: '169286/2593363/Stj%c3%b8rdal_-_Stua_Kafe_og_Restaurant_Stj%c3%b8rdal_1.jpg', cap: 'Stua Kafé og Restaurant', to: '/galleri/postkort', alt: 'Stua Kafé og Restaurant' },
    { p: '169192/2591192/stjoerdal-den-gamle-tingstue.jpg', cap: 'Den gamle tingstua', to: '/galleri/rotasjon', alt: 'Den gamle tingstua' },
    { p: '169264/2593341/Bjerkanhj%c3%b8rnet.jpg', cap: 'Bjerkanhjørnet', to: '/galleri/postkort', alt: 'Bjerkanhjørnet' },
  ]
  const pubs = [
    { p: '221106/3600449/Historisk_a%cc%8arbok_2021_for_Stj%c3%b8rdalsbygdene_liten.jpeg', title: 'Historisk Årbok for Stjørdalsbygdene', year: '2021' },
    { p: '219053/3568299/NT_aarbok_crfs.jpg', title: 'Nord-Trøndelag Historielags Årbok', year: '2020' },
    { p: '221107/3600450/Vikaune_fabrikker_AS_100_a%cc%8ar_liten.jpeg', title: 'Vikaune Fabrikker AS — 100 år', year: '2021' },
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Trøndelag &nbsp;·&nbsp; Siden 1977</p>
          <div className="hero-orn"><span className="hero-orn-diamond"></span></div>
          <h1 className="hero-title">Stjørdal Historielag</h1>
          <p className="hero-subtitle">Vi bevarer lokalhistorien</p>
          <div className="hero-orn"><span className="hero-orn-diamond"></span></div>
          <p className="hero-tagline">Stjørdal &nbsp;·&nbsp; Trøndelag &nbsp;·&nbsp; Norge</p>
        </div>
        <div className="hero-scroll">Scroll<span className="hero-scroll-line"></span></div>
      </section>

      <FolkBorder />

      {/* Upcoming events */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-hdr reveal">
            <SecOrn />
            <h2 className="sec-title">Kommende arrangementer</h2>
            <p className="sec-sub">Bli med på historiske opplevelser</p>
          </div>
          <div className="events-grid">
            {events.map((e, i) => (
              <div
                key={`${e.y}-${e.m}-${e.d}`}
                className={`event-card reveal reveal-d${i + 1}`}
                style={e.article ? { cursor: 'pointer' } : undefined}
                onClick={e.article ? () => go('/artikkel/' + e.article) : undefined}
              >
                <div className="event-date-badge">
                  <span className="event-day">{e.d}</span>
                  <span className="event-month">{MONTHS_SHORT[e.m]} {e.y}</span>
                </div>
                <p className="event-type">{e.type}</p>
                <h3 className="event-title">{e.title}</h3>
                <p className="event-loc"><PinIcon /> {e.loc}</p>
                <p className="event-desc">{e.desc}</p>
                <span
                  className="text-link"
                  onClick={(ev) => { ev.stopPropagation(); go('/kalender') }}
                >Se kalender →</span>
              </div>
            ))}
          </div>
          <div className="section-cta reveal">
            <a className="btn btn-outline" onClick={() => go('/kalender')}>Se hele kalenderen →</a>
          </div>
        </div>
      </section>

      <FolkBorder />

      {/* Articles preview */}
      <section className="section">
        <div className="container">
          <div className="sec-hdr reveal">
            <SecOrn />
            <h2 className="sec-title">Siste artikler</h2>
            <p className="sec-sub">Historier fra Stjørdal og omegn</p>
          </div>
          <div className="articles-grid">
            {previewArticles.map((a, i) => (
              <article
                key={a.id}
                className={`article-card reveal reveal-d${i + 1}`}
                onClick={() => go('/artikkel/' + a.id)}
              >
                <div className="art-img">
                  <img src={a.rawImage ? a.image : img(a.image, 760)} alt={a.title} onError={onImgError} />
                </div>
                <div className="art-body">
                  <p className="art-tag">{a.tag}</p>
                  <h3 className="art-title">{a.title}</h3>
                  <p className="art-excerpt">{a.excerpt}</p>
                  <div className="art-meta">
                    <span className="art-date">{a.date}</span>
                    <span className="art-more">Les mer →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta reveal">
            <a className="btn btn-outline" onClick={() => go('/artikler')}>Se alle artikler</a>
          </div>
        </div>
      </section>

      <FolkBorder />

      {/* Publications preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-hdr reveal">
            <SecOrn />
            <h2 className="sec-title">Publikasjoner</h2>
            <p className="sec-sub">Årbøker og historiske utgivelser</p>
          </div>
          <div className="pub-shelf">
            {pubs.map((p, i) => (
              <div key={p.title} className={`pub-item reveal reveal-d${i + 1}`} onClick={() => go('/publikasjoner')}>
                <div className="pub-cover"><img src={img(p.p, 400)} alt={p.title} onError={onImgError} /></div>
                <h4 className="pub-title">{p.title}</h4>
                <p className="pub-year">{p.year}</p>
              </div>
            ))}
          </div>
          <div className="section-cta reveal">
            <a className="btn btn-primary" onClick={() => go('/publikasjoner')}>Se alle publikasjoner</a>
          </div>
        </div>
      </section>

      <FolkBorder />

      {/* Albums preview */}
      <section className="section">
        <div className="container">
          <div className="sec-hdr reveal">
            <SecOrn />
            <h2 className="sec-title">Fotoalbum</h2>
            <p className="sec-sub">Historiske bilder fra Stjørdal og Trøndelag</p>
          </div>
          <div className="albums-grid reveal">
            {previewAlbumThumbs.map((t, i) => (
              <div key={i} className="album-thumb" onClick={() => go(t.to)}>
                <img src={img(t.p, 600) + '&height=420&mode=crop'} alt={t.alt} onError={onImgError} />
                <div className="album-caption">{t.cap}</div>
              </div>
            ))}
          </div>
          <div className="section-cta reveal">
            <a className="btn btn-outline" onClick={() => go('/album')}>Se alle album →</a>
          </div>
        </div>
      </section>

      <FolkBorder />

      {/* About */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-inner reveal">
            <span className="about-opening-quote">&ldquo;</span>
            <p className="about-lead">
              Stjørdal Historielag arbeider for å samle inn, bevare og formidle historisk kunnskap om Stjørdal og
              omegn — fra oldtid til nær fortid.
            </p>
            <p className="about-body">
              Laget ble stiftet i 1977 og har i dag omtrent 180 medlemmer. Vi arrangerer foredrag, bildekafeer,
              historiske vandringer og turer, og utgir årbøker og andre publikasjoner. Alle med interesse for
              lokalhistorie er hjertelig velkomne — enten som aktive bidragsytere eller som medlemmer.
            </p>
            <div className="about-ctas">
              <a className="btn btn-primary" onClick={() => go('/om-oss/historie')}>Les mer om oss</a>
              <a className="btn btn-outline" onClick={() => go('/kontakt')}>Bli medlem</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
