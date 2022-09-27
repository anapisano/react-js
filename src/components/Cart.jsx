import React,{ useContext }  from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./item/ItemCart";
import './cart.css';


const Cart = () => {
    
    const {totalProducts, totalPrice, clearCart, cart} = useContext(CartContext)
    
    if (cart.length === 0){
        return(
            <>
                <h4>No hay elementos en el carrito</h4>
            </>
        )
    }

    return(
        <div className="row justify-content-center">
            <div className="col-5">
            <>{
                cart.map (producto => <ItemCart key={producto.id} producto={producto} />)
            }
            </>
            </div>
            <div className="cart-card col-3 text-center">
                <h4>Su compra contiene {totalProducts()} elementos y suma un total de</h4>
                <h3> ${totalPrice()}</h3>
                <button className="btn btn-secondary" type="button" onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
        
    )
}

export default Cart;