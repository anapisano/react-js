import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    
    return (
        <div className="col-4 text-center">
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <img src={item.imagen} className="img-fluid p-1 rounded-2"width=""/>
            <h4 className="card-text">${item.precio}</h4>
            <ItemCount stock={item.stock} initial={1} onAdd={0}/>
            
        </div>

    )
}

export default ItemDetail;