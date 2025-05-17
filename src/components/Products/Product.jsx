import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './stylePageCard.css';
import { ROUTES } from '../../utils/routes';
import { addItemToCart } from '../../features/user/userSlice';


const Product = (item) => {
    const { title, price, description, images } = item;

    const dispatch = useDispatch();
    const currentImaga = images[0];

    const addToCart = () => {
        console.log('addToCart')
        dispatch(addItemToCart(item));
    }

    return (
        <div className="pageCard">
            <div className="containerImgProduct" style={{ backgroundImage: `url(${currentImaga})` }} />
            <div className='miniFotoProductContainer'>
                {images.map((image, i) => (
                    <div
                        key={i}
                        className='containerImgExtra'
                        style={{ backgroundImage: `url(${image})` }}
                        onClick={() => { }}
                    />))}
            </div>
            <div className="descriptionCard">
                <Link to={ROUTES.HOME}> <button className="btnBack">Back</button> </Link>
                <h3 className="name">{title}</h3>
                <div className="description">{description}</div>
                <div className='descriptionBlock'>
                    <div className='priceProductBlock'>
                        <div className='priceProduct'>{price}$</div>
                        <div className='oldPriceProduct' style={{ fontSize: 'x-large' }}>{Math.floor(price * 1.8)}$</div>
                    </div>
                </div>
  
                <div className="btnBlock">
                    <button className="buttonApp" onClick={addToCart}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Product;