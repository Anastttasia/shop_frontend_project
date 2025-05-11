import { useDispatch, useSelector } from 'react-redux';

import './Header.css';

import cartLogo from '../../image/icon/icon_cart.svg'
import userLogo from '../../image/icon/icon_user.svg'
import bagLogo from '../../image/icon/icon_bag.svg'

import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import { toggleForm } from '../../features/user/userSlice';
import { useEffect, useState } from 'react';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector(({ user }) => user);

    const [values, setValues] = useState({ name: "Guest", avatar: userLogo });

    useEffect(() => {
        if (!currentUser) return;

        setValues(currentUser);
    }, [currentUser])

    const handlClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE)
    }

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

            <div style={{ display: 'flex' }}>
                <div className='userLogoBlock' onClick={handlClick}>
                    <img src={userLogo} alt='userLogo' className='headerLogo'></img>
                    <p style={{margin: '0'}}>{values.name}</p>
                </div>
                <Link className='linkStyle'><img src={cartLogo} alt='cartLogo' className='headerLogo'></img><span className='countItemCart'>13</span></Link>

            </div>
        </header>

    )
};

export default Header;