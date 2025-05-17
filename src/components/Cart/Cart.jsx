import React from "react";
import { useDispatch, useSelector } from "react-redux";

import deleteLogo from '../../image/icon/icon_trash.svg'
import { addItemToCart, removeItemFromCart } from "../../features/user/userSlice";

import { sumBy } from '../../utils/common'

import './Cart.css'
import Footer from "../Footer/Footer";

const Cart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(({ user }) => user)

    const changeQuantity = (item, quantity) => {
        dispatch(addItemToCart({ ...item, quantity }))
    }

    const removeItem = (id) => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <>
            <section className="cartContainer">
                <h2 className="TitleCart">Your cart</h2>

                {!cart.length ? (
                    <div className="cartBlockEmpty">Here is empty</div>
                ) : (
                    <>
                        <div className="cartBlock">
                            <div className="totalPriceCart">
                                <div className="totalPriceCartBlock">
                                    <span>Total price: {" "}</span>
                                    <div className="totalPriceBlock">
                                        <span className="priceProduct">{sumBy(cart.map(({ quantity, price }) => quantity * price))}$</span>
                                        <span className="oldPriceProduct">{sumBy(cart.map(({ quantity, price }) => quantity * price * 1.8))}$</span>
                                    </div>
                                </div>
                                <button className='btnSubmitForm' style={{ width: '95%' }}> Proceed to checkout</button>
                            </div>
                            <div className="totalPriceCart">
                                {cart.map((item) => {
                                    const { title, category, images, price, id, quantity } = item;

                                    return (
                                        <div className="itemCart" key={id}>
                                            <div className='containerImgBlockCart' style={{ backgroundImage: `url(${images[0]})` }}></div>
                                            <div className="productInfoBlockCart">
                                                <h3 className='titleProductCart'>{title}</h3>
                                                <div className='cat'>Category: {category.name}</div>
                                                <div className='descriptionBlock'>
                                                    <div className='priceProductBlockCart'>
                                                        <div className='priceProduct'><span className="priceProductText">For one</span> {price}$</div>
                                                        <div className='oldPriceProduct'>{Math.floor(price * 1.8)}$</div>
                                                    </div>
                                                </div>
                                                <div className="quantityBlock">
                                                    <div className="cartBtn" onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>-</div>
                                                    <h3 className='quantityProduct'>{quantity}</h3>
                                                    <div className="cartBtn" onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>+</div>
                                                </div>
                                            </div>

                                            <div className="totalPriceProduct">{price * quantity}$</div>
                                            <div onClick={() => removeItem(item.id)} className="deleteBtn"><img src={deleteLogo} alt="" /></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )}

            </section>
            <Footer />
        </>
    )
}

export default Cart;