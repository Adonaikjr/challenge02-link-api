import { ContainerFooter } from './styled'
import { BackgroundLogo } from '../Header/styled'
import socialTwitter from '../../images/icon-twitter.svg'
import socialFacebook from '../../images/icon-facebook.svg'
import socialPinterest from '../../images/icon-pinterest.svg'
import socialinstagran from '../../images/icon-instagram.svg'
export function Footer() {
  return (
    <ContainerFooter>
      <BackgroundLogo />
      <nav>
        <ul>
          <h4>Features</h4>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <h4>Resources</h4>

          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <h4>Company</h4>
          <li>Contact</li>
          <li>Careers</li>
          <li>Our Team</li>
          <li>About</li>
        </ul>
      </nav>
      <section>
        <img src={socialFacebook} alt="iconFacebook" />
        <img src={socialTwitter} alt="iconTwitter" />
        <img src={socialPinterest} alt="iconPinteret" />
        <img src={socialinstagran} alt="iconInstagran" />
      </section>
    </ContainerFooter>
  )
}
