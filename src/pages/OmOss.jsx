import { useLayoutEffect, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { img } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import { PlusIcon } from '../components/icons.jsx'

const TABS = ['historie', 'aktiviteter', 'foreningsdrift', 'vedtekter']

const BYLAWS = [
  { h: '§ 1 — Formål', body: 'Stjørdal historielag har som formål å vekke interesse for og spre kunnskap om lokalhistorien, samt å samle inn og ta vare på alt som har betydning for Stjørdals historie og kulturarv — og å formidle dette til kommende generasjoner.' },
  { h: '§ 2 — Medlemskap', body: 'Medlemskap er åpent for alle som har interesse for lagets formål. Medlemskontingenten fastsettes av årsmøtet. Medlemmer har stemmerett på årsmøtet etter å ha betalt kontingent for inneværende år.' },
  { h: '§ 3 — Årsmøtet', body: 'Årsmøtet er lagets høyeste organ og avholdes innen utgangen av februar hvert år. Det behandler årsmelding og regnskap, fastsetter kontingent, velger styre og behandler innkomne saker. Innkalling sendes medlemmene minst to uker før møtet.' },
  { h: '§ 4 — Styret', body: 'Laget ledes av et styre valgt av årsmøtet, bestående av leder, nestleder, kasserer, sekretær og styremedlemmer. Styret er ansvarlig for den daglige driften og for å gjennomføre årsmøtets vedtak.' },
  { h: '§ 5 — Vedtektsendringer', body: 'Endringer i vedtektene kan kun vedtas av årsmøtet, og krever to tredjedels flertall blant de frammøtte medlemmene. Forslag til endringer må være styret i hende i god tid før årsmøtet.' },
]

export default function OmOss() {
  const { tab } = useParams()
  const navigate = useNavigate()
  if (tab && !TABS.includes(tab)) return <Navigate to="/om-oss/historie" replace />
  const active = tab || 'historie'

  const panelClass = (name) => 'tab-panel prose' + (active === name ? ' active' : '')

  return (
    <>
      <PageHero
        bg={img('169293/2593370/Stj%c3%b8rdalshalsen_fra_Stokkberga.jpg', 1800)}
        crumbs={[{ label: 'Hjem', to: '/' }, { label: 'Om oss' }]}
        title="Om laget"
        sub="Hvem vi er, hva vi gjør, og hvordan vi arbeider"
      />
      <section className="section">
        <div className="container">
          <div className="tabs-bar">
            <button className={'tab-btn' + (active === 'historie' ? ' active' : '')} onClick={() => navigate('/om-oss/historie')}>Historie</button>
            <button className={'tab-btn' + (active === 'aktiviteter' ? ' active' : '')} onClick={() => navigate('/om-oss/aktiviteter')}>Aktiviteter</button>
            <button className={'tab-btn' + (active === 'foreningsdrift' ? ' active' : '')} onClick={() => navigate('/om-oss/foreningsdrift')}>Foreningsdrift</button>
            <button className={'tab-btn' + (active === 'vedtekter' ? ' active' : '')} onClick={() => navigate('/om-oss/vedtekter')}>Vedtekter</button>
          </div>

          {/* Historie */}
          <div className={panelClass('historie')}>
            <h3>Lagets historie</h3>
            <p className="lead">Stjørdal historielag ble stiftet i 1977, og har siden vært en bærebjelke i det lokalhistoriske arbeidet i Stjørdalsbygdene.</p>
            <p>I dag har laget omtrent 180 medlemmer, og det avholdes to til fire medlemsmøter hvert år. Møtene byr på foredrag, bildekafeer og sosialt samvær, og er åpne for alle med interesse for historie og kulturarv.</p>
            <div className="stat-row">
              <div className="stat-box"><div className="stat-num">1977</div><div className="stat-label">Stiftet</div></div>
              <div className="stat-box"><div className="stat-num">~180</div><div className="stat-label">Medlemmer</div></div>
              <div className="stat-box"><div className="stat-num">2–4</div><div className="stat-label">Møter i året</div></div>
            </div>
            <p>Gjennom snart et halvt århundre har laget samlet inn og formidlet kunnskap om Stjørdals fortid — fra arkeologiske funn og middelalderens Værnes, til industrihistorie og bilder fra den nære fortiden. Mye av dette materialet finnes i lagets fotoalbum og publikasjoner her på nettsiden.</p>
          </div>

          {/* Aktiviteter */}
          <div className={panelClass('aktiviteter')}>
            <h3>Aktiviteter</h3>
            <p className="lead">Vi forsøker alltid å legge aktivitetene til steder og temaer med historisk innhold.</p>
            <p>På forsommeren arrangerer vi en dagstur for medlemmene, og om høsten en halvdagstur. Turene går til steder med historisk interesse — fra nabokommunene i Trøndelag til lengre utflukter. Bilder fra mange av turene finner du i fotoalbumet.</p>
            <h4>Gjennom året tilbyr vi blant annet:</h4>
            <ul className="bullets">
              <li>Foredrag om lokalhistoriske temaer, ofte med inviterte fagfolk</li>
              <li>Bildekafeer der gamle fotografier og film vises og kommenteres</li>
              <li>Historiske byvandringer i Stjørdal sentrum</li>
              <li>Dagstur på forsommeren og halvdagstur om høsten</li>
              <li>Samarbeid med Stjørdal museum og Nord-Trøndelag historielag</li>
            </ul>
            <p>Alle arrangementer kunngjøres i kalenderen her på siden og på lagets Facebook-side.</p>
            <div className="section-cta" style={{ textAlign: 'left', marginTop: '1.5rem' }}>
              <a className="btn btn-primary" onClick={() => navigate('/kalender')}>Se kalenderen</a>
            </div>
          </div>

          {/* Foreningsdrift */}
          <div className={panelClass('foreningsdrift')}>
            <h3>Foreningsdrift</h3>
            <p className="lead">Stjørdal historielag er en frivillig, ideell forening drevet av medlemmene selv.</p>
            <p>Laget ledes av et styre som velges på årsmøtet, og driften er basert på dugnadsånd og medlemmenes engasjement. Kontingenten holdes lav, og inntektene går i sin helhet tilbake til lagets aktiviteter, publikasjoner og bevaringsarbeid.</p>
            <h4>Medlemskap</h4>
            <p>Som medlem støtter du det lokalhistoriske arbeidet, får invitasjon til alle arrangementer og turer, og blir en del av et hyggelig fellesskap av historieinteresserte. Nye medlemmer er alltid velkomne.</p>
            <div className="detail-callout">
              <p className="ci-label">Bli medlem</p>
              <p>Ta kontakt på <a href="mailto:stjordal.historielag@gmail.com" style={{ color: 'var(--terracotta)' }}>stjordal.historielag@gmail.com</a> eller bruk kontaktskjemaet, så hjelper vi deg i gang.</p>
            </div>
          </div>

          {/* Vedtekter */}
          <div className={'tab-panel' + (active === 'vedtekter' ? ' active' : '')}>
            <div className="prose" style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
              <h3>Vedtekter</h3>
              <p>Et utdrag av lagets vedtekter. Fullstendig versjon fås ved henvendelse til styret.</p>
            </div>
            <Accordion />
          </div>
        </div>
      </section>
    </>
  )
}

function Accordion() {
  return (
    <div className="accordion">
      {BYLAWS.map((b, i) => (
        <AccordionItem key={b.h} heading={b.h} body={b.body} defaultOpen={i === 0} />
      ))}
    </div>
  )
}

function AccordionItem({ heading, body, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const bodyRef = useRef(null)

  // Drive max-height the same way the design's JS does, so the open/close
  // CSS transition has a concrete target height.
  useLayoutEffect(() => {
    const el = bodyRef.current
    if (el) el.style.maxHeight = open ? el.scrollHeight + 'px' : '0px'
  }, [open])

  return (
    <div className={'acc-item' + (open ? ' open' : '')}>
      <button className="acc-head" onClick={() => setOpen((o) => !o)}>
        {heading}
        <span className="acc-icon"><PlusIcon /></span>
      </button>
      <div className="acc-body" ref={bodyRef}>
        <div className="acc-body-inner">{body}</div>
      </div>
    </div>
  )
}
