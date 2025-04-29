import './Header.css';
import cartLogo from '../../image/icon/icon_cart.svg'
import userLogo from '../../image/icon/icon_user.svg'
import bagLogo from '../../image/icon/icon_bag.svg'

import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Header = () => {
    return (
        <header className='header'>
            <div className='logoBlock'>
                <Link to={ROUTES.HOME} className='linkStyle'>
                    <p className='headerNameLogo'>NOZO</p>
                </Link>
                <Link className='linkStyle'>
                    <div className='btnCatalog'><img src={bagLogo} alt='bagLogo' className='btnLogoCatalog'></img>Catalog</div>
                </Link>
            </div>

            <div>
                <Link className='linkStyle'><img src={userLogo} alt='userLogo' className='headerLogo'></img></Link>
                <Link className='linkStyle'><img src={cartLogo} alt='cartLogo' className='headerLogo'></img><span className='countItemCart'>13</span></Link>

            </div>
        </header>

    )
};

export default Header;