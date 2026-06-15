import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EVENTS, MONTHS, MONTHS_SHORT, DOW, img } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import { ChevronLeft, ChevronRight, ClockIcon, PinIcon } from '../components/icons.jsx'

export default function Kalender() {
  const navigate = useNavigate()
  const [calMonth, setCalMonth] = useState(5) // June 2026
  const [calYear, setCalYear] = useState(2026)
  const [mode, setMode] = useState('month')

  const prev = () => {
    setCalMonth((m) => {
      if (m === 0) { setCalYear((y) => y - 1); return 11 }
      return m - 1
    })
  }
  const next = () => {
    setCalMonth((m) => {
      if (m === 11) { setCalYear((y) => y + 1); return 0 }
      return m + 1
    })
  }

  const onEvent = (e) => {
    if (e.article) navigate('/artikkel/' + e.article)
    else setMode('list')
  }

  return (
    <>
      <PageHero
        bg={img('169296/2593373/V%c3%a6rnes_Kirke_med_Pr%c3%a6stegaarden.jpg', 1800)}
        crumbs={[{ label: 'Hjem', to: '/' }, { label: 'Kalender' }]}
        title="Kalender"
        sub="Møter, foredrag, turer og arrangementer gjennom året"
      />
      <section className="section">
        <div className="container">
          <div className="cal-toolbar">
            <div className="cal-nav">
              <button onClick={prev} aria-label="Forrige måned"><ChevronLeft /></button>
              <span className="cal-month">{MONTHS[calMonth]} {calYear}</span>
              <button onClick={next} aria-label="Neste måned"><ChevronRight /></button>
            </div>
            <div className="view-toggle">
              <button className={mode === 'month' ? 'active' : ''} onClick={() => setMode('month')}>Måned</button>
              <button className={mode === 'list' ? 'active' : ''} onClick={() => setMode('list')}>Liste</button>
            </div>
          </div>

          <div id="cal-body">
            {mode === 'month' ? (
              <MonthGrid calMonth={calMonth} calYear={calYear} onEvent={onEvent} />
            ) : (
              <ListView onEvent={onEvent} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function MonthGrid({ calMonth, calYear, onEvent }) {
  const first = new Date(calYear, calMonth, 1)
  let startDow = first.getDay()
  startDow = startDow === 0 ? 6 : startDow - 1 // Monday-first
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate()
  const today = new Date()

  const cells = []
  DOW.forEach((d) => cells.push(<div className="cal-dow" key={'dow-' + d}>{d}</div>))
  for (let i = 0; i < startDow; i++) cells.push(<div className="cal-cell empty" key={'empty-' + i}></div>)
  for (let d = 1; d <= daysInMonth; d++) {
    const evs = EVENTS.filter((e) => e.y === calYear && e.m === calMonth && e.d === d)
    const isToday =
      today.getFullYear() === calYear && today.getMonth() === calMonth && today.getDate() === d
    cells.push(
      <div className={'cal-cell' + (isToday ? ' today' : '')} key={'cell-' + d}>
        <div className="cal-num">{d}</div>
        {evs.map((e) => (
          <span
            key={e.title}
            className={'cal-event' + (e.terra ? ' terra' : '')}
            title={e.title}
            onClick={() => onEvent(e)}
          >
            {e.title}
          </span>
        ))}
      </div>
    )
  }
  return <div className="cal-grid">{cells}</div>
}

function ListView({ onEvent }) {
  const upcoming = EVENTS.slice().sort((a, b) => new Date(a.y, a.m, a.d) - new Date(b.y, b.m, b.d))
  return (
    <div className="cal-list">
      {upcoming.map((e) => (
        <div
          key={`${e.y}-${e.m}-${e.d}`}
          className="cal-list-item"
          style={e.article ? { cursor: 'pointer' } : undefined}
          onClick={e.article ? () => onEvent(e) : undefined}
        >
          <div className="cal-list-date">
            <span className="d">{e.d}</span>
            <span className="m">{MONTHS_SHORT[e.m]}</span>
            <span className="y">{e.y}</span>
          </div>
          <div className="cal-list-body">
            <p className="clb-type">{e.type}</p>
            <h4>{e.title}</h4>
            <div className="clb-meta">
              <span><ClockIcon /> {e.time}</span>
              <span><PinIcon /> {e.loc}</span>
            </div>
            <p>{e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
