import { img } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import { SecOrn, FolkBorder, onImgError } from '../components/common.jsx'
import { DocIcon, HomeIcon, ClayIcon, ChurchIcon, BookIcon } from '../components/icons.jsx'

const YEARBOOKS = [
  { p: '221106/3600449/Historisk_a%cc%8arbok_2021_for_Stj%c3%b8rdalsbygdene_liten.jpeg', title: 'Historisk Årbok for Stjørdalsbygdene', year: '2021' },
  { p: '219053/3568299/NT_aarbok_crfs.jpg', title: 'Nord-Trøndelag Historielags Årbok', year: '2020' },
  { p: '221107/3600450/Vikaune_fabrikker_AS_100_a%cc%8ar_liten.jpeg', title: 'Vikaune Fabrikker AS — 100 år', year: '2021' },
]

const COLLECTIONS = [
  { icon: <DocIcon />, variant: '', delay: 1, h: 'Sånn va de!', p: 'Gamle bilder og fortellinger fra Stjørdal — et tilbakeblikk på folk, steder og hverdagsliv i en svunnen tid.', link: 'Utforsk samlingen →' },
  { icon: <DocIcon />, variant: 'terra', delay: 2, h: 'Sånn va de å!', p: 'Fortsettelsen — enda flere bilder og historier som tar vare på minnene fra Stjørdalsbygdene.', link: 'Utforsk samlingen →' },
  { icon: <HomeIcon />, variant: 'gold', delay: 1, h: 'Værnes — fra høvdingsete til storflyplass', p: "Værnes' lange historie: fra maktsenter i jernalderen, via militær ekserserplass, til dagens lufthavn.", link: 'Les mer →' },
  { icon: <ClayIcon />, variant: '', delay: 2, h: 'Fra sjøbunn til vakker pottemakerkunst', p: 'Historien om leira i Stjørdal — fra havbunn til råstoff for et blomstrende pottemakeri og teglverk.', link: 'Les mer →' },
  { icon: <ChurchIcon />, variant: 'terra', delay: 1, h: 'Værnes kirke — en kulturskatt i stein og tre', p: 'Den ærverdige middelalderkirken på Værnes, med sitt unike takverk i eik — et av landets fremste.', link: 'Les mer →' },
  { icon: <BookIcon />, variant: 'gold', delay: 2, h: 'Historiske årbøker', p: 'En oversikt over lagets årbøker gjennom årene — register, temaer og hvor du kan finne dem.', link: 'Se oversikt →' },
]

export default function Publikasjoner() {
  return (
    <>
      <PageHero
        bg={img('169296/2593373/V%c3%a6rnes_Kirke_med_Pr%c3%a6stegaarden.jpg', 1800)}
        crumbs={[{ label: 'Hjem', to: '/' }, { label: 'Publikasjoner' }]}
        title="Publikasjoner"
        sub="Årbøker, temahefter og digitale samlinger"
      />

      <section className="section">
        <div className="container">
          <div className="sec-hdr reveal">
            <SecOrn />
            <h2 className="sec-title">Årbøker</h2>
            <p className="sec-sub">Historiske utgivelser fra laget og regionen</p>
          </div>
          <div className="pub-shelf">
            {YEARBOOKS.map((b, i) => (
              <div key={b.title} className={`pub-item reveal reveal-d${i + 1}`}>
                <div className="pub-cover"><img src={img(b.p, 400)} alt={b.title} onError={onImgError} /></div>
                <h4 className="pub-title">{b.title}</h4>
                <p className="pub-year">{b.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FolkBorder />

      <section className="section section-alt">
        <div className="container">
          <div className="sec-hdr reveal">
            <SecOrn />
            <h2 className="sec-title">Temasamlinger</h2>
            <p className="sec-sub">Digitale hefter og artikkelserier</p>
          </div>
          <div className="collection-grid">
            {COLLECTIONS.map((c) => (
              <div key={c.h} className={`collection-card reveal reveal-d${c.delay}`}>
                <div className={'collection-icon' + (c.variant ? ' ' + c.variant : '')}>{c.icon}</div>
                <div className="collection-body">
                  <h4>{c.h}</h4>
                  <p>{c.p}</p>
                  <span className="text-link">{c.link}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
