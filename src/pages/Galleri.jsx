import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ALBUMS, img, thumb } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import { onImgError } from '../components/common.jsx'
import { useLightbox } from '../components/Lightbox.jsx'

export default function Galleri() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { openLightbox } = useLightbox()
  const al = ALBUMS.find((x) => x.id === id)
  if (!al) return <Navigate to="/album" replace />

  return (
    <>
      <PageHero
        bg={img(al.cover, 1600)}
        crumbs={[{ label: 'Hjem', to: '/' }, { label: 'Album', to: '/album' }, { label: al.title }]}
        title={al.title}
        sub={al.desc}
      />
      <section className="section">
        <div className="container">
          <div
            className="sec-hdr-left"
            style={{
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <span className="back-link" onClick={() => navigate('/album')}>← Tilbake til album</span>
            <span className="sec-sub" style={{ margin: 0 }}>{al.images.length} av {al.count} bilder</span>
          </div>
          <div className="gallery-grid">
            {al.images.map((im, i) => (
              <div className="gallery-item" key={i} onClick={() => openLightbox(al.images, i)}>
                <img src={thumb(im[0])} alt={im[1]} loading="lazy" onError={onImgError} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
