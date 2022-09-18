import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import  { productos } from "./arrayProductos"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const {id} = useParams()
    

     useEffect(() => {
        const getProducto = new Promise ((resolve) => {              
            setTimeout (() => {
                resolve (productos);
            }, 1000);
        });
            getProducto.then (res => setProducto(res.find (prod => prod.id === parseInt(id))));
            
    }, [id])

    return(
        <div className="container-fluid row justify-content-center">
            <ItemDetail item={producto} />
        </div>
    )

}

export default ItemDetailContainer;

