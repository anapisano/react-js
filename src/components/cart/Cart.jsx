import React,{ useContext }  from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../item/ItemCart";
import './cart.css';


const Cart = () => {
    
    const {totalProducts, totalPrice, clearCart, cart} = useContext(CartContext)

    const order = {
        buyer: {
            nombre: "Ana",
            mail: "xxxxxx@hotmial.com",
            tel: 45128754,
            dir: "el zampa 8765"
        },
        items: cart.map (product =>({id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.cantidad })),
        total: totalPrice(),
    }
    
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection (db, 'orders');
        addDoc (ordersCollection, order)
        .then(({id}) => console.log (id))
    }

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
                <button className="btn btn-secondary" type="button" onClick={handleClick}>Finalizar compra</button>
            </div>
        </div>
        
    )
}

export default Cart;