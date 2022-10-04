import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const {id} = useParams()

     useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "productos", id);
        console.log(response)
        getDoc(response).then((snapShot) => {
            console.log(snapShot)
            if (snapShot.exists()) {
                setProducto({id:snapShot.id, ...snapShot.data()});
            
            }            
        });

    }, [id])

    return(
        <div className="container-fluid row justify-content-center">
            <ItemDetail item={producto} />
        </div>
    )

}

export default ItemDetailContainer;

