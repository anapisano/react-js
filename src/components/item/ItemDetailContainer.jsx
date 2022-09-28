import React from "react";
import { useEffect, useState } from "react";
// import  { productos } from "../arrayProductos"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const {id} = useParams()

     useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "cria-suelta", id);
        console.log(response)
        getDoc(response).then((snapShot) => {
            console.log(snapShot)
            if (snapShot.exists()) {
                setProducto({id:snapShot.id, ...snapShot.data()});
            
            }            
        });

/*         const getProducto = new Promise ((resolve) => {              
            setTimeout (() => {
                resolve (productos);
            }, 1000);
        });
            getProducto.then (res => setProducto(res.find (prod => prod.id === parseInt(id))));
             */
    }, [id])

    return(
        <div className="container-fluid row justify-content-center">
            <ItemDetail item={producto} />
        </div>
    )

}

export default ItemDetailContainer;

