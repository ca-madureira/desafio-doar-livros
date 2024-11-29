import logoFacebook from '../../assets/facebook.png';
import logoTwitter from '../../assets/twitter.png';
import logoYoutube from '../../assets/youtube.png';
import logoLinkedin from '../../assets/linkedin.png';
import logoInstagram from '../../assets/instagram.png';

import s from './footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a href="#">
            <img src={logoFacebook} alt="ilustração da logo do facebook" />
          </a>
          <a href="#">
            <img src={logoTwitter} alt="ilustração da logo do twitter" />
          </a>
          <a href="#">
            <img src={logoYoutube} alt="ilustração da logo do youtube" />
          </a>
          <a href="#">
            <img src={logoLinkedin} alt="ilustração da logo do Linkedin" />
          </a>
          <a href="#">
            <img src={logoInstagram} alt="ilustração da logo do instagram" />
          </a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
