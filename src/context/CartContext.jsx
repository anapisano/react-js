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

    const clearCart = () => setCart([])

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{ addItem, clearCart, isInCart, removeItem, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider