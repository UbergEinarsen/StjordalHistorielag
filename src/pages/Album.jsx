import { useNavigate } from 'react-router-dom'
import { ALBUMS, img } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import { onImgError } from '../components/common.jsx'

export default function Album() {
  const navigate = useNavigate()
  return (
    <>
      <PageHero
        bg={img('169287/2593364/Stj%c3%b8rdal_flyfoto1.jpg', 1800)}
        crumbs={[{ label: 'Hjem', to: '/' }, { label: 'Album' }]}
        title="Fotoalbum"
        sub="Historiske bilder, postkort og minner fra lagets virke"
      />
      <section className="section">
        <div className="container">
          <div className="albums-library" id="albums-library">
            {ALBUMS.map((al, i) => (
              <div
                key={al.id}
                className={`album-card reveal reveal-d${(i % 3) + 1}`}
                onClick={() => navigate('/galleri/' + al.id)}
              >
                <div className="album-cover">
                  <span className="album-count">{al.count} bilder</span>
                  <img src={img(al.cover, 760)} alt={al.title} onError={onImgError} />
                </div>
                <div className="album-info">
                  <p className="a-year">{al.year}</p>
                  <h4>{al.title}</h4>
                  <p>{al.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
