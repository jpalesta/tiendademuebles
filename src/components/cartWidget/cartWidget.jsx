import React from 'react'
import './CartWidget.css'
import chango from '../Images/shopping-cart.png';

const CartWidget = () => {
    return (
        <>
            <img className = "chango" src = {chango} alt ="Carrito" />
            <span>5</span>
        </>
    )
}

export default CartWidget