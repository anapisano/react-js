import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setCart(cart.map(producto =>{
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad} : producto
            }))
        }else{
            setCart([...cart, {...item, cantidad}])
        }

    } 

    console.log(cart)

    const totalPrice = () => cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);

    const totalProducts = () => cart.reduce ((acumulador, prodActual) => acumulador + prodActual.cantidad, 0);

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.some(item => item.id === id);

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{ addItem, clearCart, isInCart, removeItem, totalPrice, totalProducts, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider