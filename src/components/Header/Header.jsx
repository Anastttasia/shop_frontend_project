import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../../features/api/apiSlice';

import './Header.css';

import cartLogo from '../../image/icon/icon_cart.svg'
import userLogo from '../../image/icon/icon_user.svg'
import magnifierLogo from '../../image/icon/icon_magnifier.svg'

import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import { toggleForm } from '../../features/user/userSlice';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState("")
    const { currentUser, cart } = useSelector(({ user }) => user);

    const [values, setValues] = useState({ name: "Guest", avatar: userLogo });

    const { data, isLoading } = useGetProductsQuery({ title: searchValue })

    console.log("dataHeader--->", data)

    useEffect(() => {
        if (!currentUser) return;

        setValues(currentUser);
    }, [currentUser])

    const handlClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE)
    }

    const handlSearch = ({ target: { value } }) => {
        setSearchValue(value)
        console.log('data');
        console.log(data);
    }

    return (
        <header className='header'>
            <div className='logoBlock'>
                <Link to={ROUTES.HOME} className='linkStyle'>
                    <p className='headerNameLogo'>NOZO</p>
                </Link>

                <form className='searchForm'>
                    <div><img src={magnifierLogo} alt="" className='magnifierLogo' /></div>
                    <input className='searchFormInput' type='search' name='search' placeholder='Search...' autoComplete='off' onChange={handlSearch} value={searchValue}></input>

                    {searchValue && (
                        <div className='boxSearch'>
                            {isLoading ? 'Loading' : data == null || !data.length ? "No results" :
                                data.map(({ title, images, id }) => {
                                    return (
                                        <Link key={id} onClick={() => setSearchValue("")} to={`/products/${id}`}>
                                            <div className='imageSearch' style={{ backgroundImage: `url(${images[0]})` }} />
                                            <div className='titleSearch'>{title}</div>
                                        </Link>
                                    )
                                })}
                        </div>
                    )}
                </form>
            </div>

            <div style={{ display: 'flex' }}>
                <div className='userLogoBlock' onClick={handlClick}>
                    <img src={userLogo} alt='userLogo' className='headerLogo'></img>
                    <p style={{ margin: '0' }}>{values.name}</p>
                </div>
                <Link to={ROUTES.CART} className='linkStyle'><img src={cartLogo} alt='cartLogo' className='headerLogo'></img>
                    {!!cart.length && (
                        <span className='countItemCart'>{cart.length}</span>
                    )}
                </Link>

            </div>
        </header>

    )
};

export default Header;