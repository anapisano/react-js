import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <div className="col-4 text-center">
            <h1>{item.nombre}</h1>
            <h4 className="card-text">${item.precio}</h4>
            <ItemCount stock={item.stock} initial={1} onAdd={0}/>
            
        </div>

    )
}

export default ItemDetail;