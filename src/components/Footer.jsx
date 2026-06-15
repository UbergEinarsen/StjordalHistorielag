import { Link } from 'react-router-dom'
import logoImg from '../images/stjordal_historielag_logo.jpg'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <img src={logoImg} alt="Stjørdal Historielag logo" className="footer-logo-mark" />
            <p className="footer-brand-name">Stjørdal Historielag</p>
            <p className="footer-brand-desc">
              Vi arbeider for å samle inn, bevare og formidle historisk kunnskap om Stjørdal og omegn for
              kommende generasjoner.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100087643594442" target="_blank" rel="noopener noreferrer" title="Facebook">FB</a>
              <a href="https://stjordalmuseum.no/" target="_blank" rel="noopener noreferrer" title="Stjørdal Museum">SM</a>
              <a href="https://www.facebook.com/nthistorielag/" target="_blank" rel="noopener noreferrer" title="NT Historielag">NT</a>
            </div>
          </div>
          <div>
            <p className="footer-col-title">Navigasjon</p>
            <div className="footer-links">
              <Link to="/">Hjem</Link>
              <Link to="/artikler">Artikler</Link>
              <Link to="/album">Fotoalbum</Link>
              <Link to="/kalender">Kalender</Link>
              <Link to="/publikasjoner">Publikasjoner</Link>
            </div>
          </div>
          <div>
            <p className="footer-col-title">Om laget</p>
            <div className="footer-links">
              <Link to="/om-oss/aktiviteter">Aktiviteter</Link>
              <Link to="/om-oss/foreningsdrift">Foreningsdrift</Link>
              <Link to="/om-oss/vedtekter">Vedtekter</Link>
              <Link to="/om-oss/historie">Lagets historie</Link>
              <Link to="/kontakt">Styret</Link>
            </div>
          </div>
          <div className="footer-contact">
            <p className="footer-col-title">Kontakt</p>
            <p><a href="mailto:stjordal.historielag@gmail.com">stjordal.historielag@gmail.com</a></p>
            <p>c/o Jan Erik Sundøy<br />Torgvegen 10B<br />7506 Stjørdal</p>
            <p style={{ marginTop: '.8rem' }}>Org.nr. 981 195 744</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Stjørdal Historielag. Alle rettigheter forbeholdt.</p>
          <p className="footer-copy">Trøndelag, Norge</p>
        </div>
      </div>
    </footer>
  )
}
