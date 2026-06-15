import { useNavigate } from 'react-router-dom'
import { img } from '../data.js'
import { onImgError } from './common.jsx'

/* One article preview card. `delay` adds a reveal-dN stagger class;
   pass it as null to render without the reveal animation. */
export default function ArticleCard({ article: a, delay, withExcerpt = true }) {
  const navigate = useNavigate()
  const cls = 'article-card' + (delay ? ` reveal reveal-d${delay}` : '')
  return (
    <article className={cls} onClick={() => navigate('/artikkel/' + a.id)}>
      <div className="art-img">
        <img src={a.rawImage ? a.image : img(a.image, 760)} alt={a.title} onError={onImgError} />
      </div>
      <div className="art-body">
        <p className="art-tag">{a.tag}</p>
        <h3 className="art-title">{a.title}</h3>
        {withExcerpt && <p className="art-excerpt">{a.excerpt}</p>}
        <div className="art-meta">
          <span className="art-date">{a.date}</span>
          <span className="art-more">Les mer →</span>
        </div>
      </div>
    </article>
  )
}
