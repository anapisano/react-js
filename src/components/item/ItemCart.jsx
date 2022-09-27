import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({producto}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <div className="item-card container-fluid row text-center">
            <div className="col-6">
                <img className="img-fluid" src={producto.imagen} alt="" />
            </div>
            <div className="col-6">
                <p>{producto.nombre}</p>
                <p>Unidades: {producto.cantidad}</p>
                <p>Precio unitario: ${producto.precio}</p>
                <p>Sub total: ${producto.precio * producto.cantidad}</p>
                <button onClick={() => removeItem(producto.id)}>Eliminar</button>   
            </div>
        </div>
    )

}

export default ItemCart