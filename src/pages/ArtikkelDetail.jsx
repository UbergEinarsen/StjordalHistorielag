import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ARTICLES, artImg } from '../data.js'
import { SecOrn, onImgError } from '../components/common.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import { ClockIcon, PinIcon } from '../components/icons.jsx'

export default function ArtikkelDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const a = ARTICLES.find((x) => x.id === id)
  if (!a) return <Navigate to="/artikler" replace />

  const related = ARTICLES.filter((x) => x.id !== a.id).slice(0, 2)

  return (
    <>
      <article className="article-detail">
        <span className="back-link" onClick={() => navigate('/artikler')}>← Tilbake til artikler</span>
        <p className="detail-tag">{a.tag}</p>
        <h1 className="detail-title">{a.title}</h1>
        <div className="detail-meta">
          <span><ClockIcon /> {a.date}</span>
          <span><PinIcon /> Stjørdal historielag</span>
        </div>
        <img className="detail-hero-img" src={artImg(a, 1200)} alt={a.title} onError={onImgError} />
        <div className="detail-body">
          <p className="lead">{a.lead}</p>
          {a.body.map((b, i) =>
            typeof b === 'string' ? (
              <p key={i}>{b}</p>
            ) : b.type === 'callout' ? (
              <div className="detail-callout" key={i}>
                <p className="ci-label">{b.label}</p>
                <p>{b.text}</p>
              </div>
            ) : null
          )}
        </div>
        <div className="detail-foot">
          <span className="back-link" onClick={() => navigate('/artikler')}>← Alle artikler</span>
          <a className="btn btn-outline" onClick={() => navigate('/kalender')}>Se kalender</a>
        </div>
      </article>

      <div className="section section-alt">
        <div className="container">
          <div className="sec-hdr">
            <SecOrn />
            <h2 className="sec-title">Flere artikler</h2>
          </div>
          <div className="articles-grid">
            {related.map((r) => (
              <ArticleCard key={r.id} article={r} delay={null} withExcerpt={false} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
