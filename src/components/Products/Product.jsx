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

            <div className="containerImg" style={{backgroundImage: `url(${currentImaga})`}}/>
            {images.map((image, i) => (
            <div 
                key={i} 
                className='' 
                style={{backgroundImage: `url(${image})`}} 
                onClick={()=>{}}
            /> ))}
            <div className="descriptionCard">
                <Link to={ROUTES.HOME}> <button className="btnBack">Back</button> </Link>
                <h3 className="name">{ title }</h3>
                <h4 className="price">{ price }$</h4>
                <p className="description">{ description }</p>
                <div className="btnBlock">
                    <button className="buttonBin">Delete</button>
                    <button className="button" onClick={addToCart}>Add</button>
                    {/* <button>♡</button> */}
                </div>
            </div>
        </div>
    );
};

export default Product;