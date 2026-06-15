import { useState } from 'react'
import { ARTICLES, img } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const FILTERS = [
  { filter: 'Alle', label: 'Alle' },
  { filter: 'Arrangement', label: 'Arrangement' },
  { filter: 'Foredrag', label: 'Foredrag' },
  { filter: 'Foto', label: 'Fotohistorie' },
  { filter: 'Industri', label: 'Industri' },
  { filter: 'Foreningsnytt', label: 'Foreningsnytt' },
]

export default function Artikler() {
  const [filter, setFilter] = useState('Alle')
  const items = ARTICLES.filter((a) => filter === 'Alle' || a.cat === filter)

  // Re-observe reveals whenever the filtered set changes.
  useScrollReveal([filter])

  return (
    <>
      <PageHero
        bg={img('169269/2593346/Gateparti_fra_Stj%c3%b8rdalshalsen.jpg', 1800)}
        crumbs={[{ label: 'Hjem', to: '/' }, { label: 'Artikler' }]}
        title="Artikler"
        sub="Historier, arrangementer og nytt fra laget"
      />
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f.filter}
                className={'filter-chip' + (filter === f.filter ? ' active' : '')}
                onClick={() => setFilter(f.filter)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="articles-grid" id="articles-list">
            {items.map((a, i) => (
              <ArticleCard key={a.id} article={a} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
