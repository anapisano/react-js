import React,{ useState, useContext }  from "react";
import { CartContext } from "../context/CartContext";


const Cart = () => {
    const {clearCart, cart} = useContext(CartContext)
    console.log(cart)
    return(
        <div className="Container-fluid">
            <h3>Su carrito contiene:</h3>
            <button className="btn btn-secondary" type="button" onClick={clearCart}>Eliminar todos</button>
        </div>
    )
}

export default Cart;