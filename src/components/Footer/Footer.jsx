import './Footer.css';
import telegramLogo from '../../image/icon/icon_telegram.svg'
import vkLogo from '../../image/icon/icon__vk.svg'
import whatsappLogo from '../../image/icon/icon__whatsapp.svg'


import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Footer = () => {
  return (
    <footer className='containerFooter'>
      <div className='footer'>
        <Link to={ROUTES.HOME} className='linkStyle'><p className='headerNameLogo'>NOZO</p></Link>
        <div>
          <img src={telegramLogo} alt='userLogo' className='footerLogo'></img>
          <img src={vkLogo} alt='cartLogo' className='footerLogo'></img>
          <img src={whatsappLogo} alt='cartLogo' className='footerLogo'></img>
        </div>
      </div>
      <div className='footerText'>
        <p>Team №1</p>
        <p>© 2025</p>
      </div>
    </footer>

  )
};

export default Footer;