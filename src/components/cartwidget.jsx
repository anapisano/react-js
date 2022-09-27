import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget= () => {
    const {totalProducts} = useContext(CartContext)
    return (
        <>
            <i className="bi bi-cart" ></i>
            <span>{totalProducts() || ''}</span>
        </>
    )
}

export default CartWidget;
