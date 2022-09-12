import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import  { productos } from "./productos"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})

    useEffect(() => {
        const getProducto = () => 
            new Promise ((resolve) => {
                const item = productos.find ((prod) => prod.id === 3);
                setTimeout (() => {
                    resolve (item);
                }, 1000);
            });
        getProducto ()
        .then ((info) =>{
            setProducto (info)
        });

    }, [])

    return(
        <div className="container-fluid row justify-content-center">
            <ItemDetail item={producto} />
        </div>
    )

}

export default ItemDetailContainer;