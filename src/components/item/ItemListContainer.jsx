import React, {useState, useEffect} from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {id, categoria} = useParams()

    useEffect(() =>{

        const db = getFirestore();
        const itemsCollection = collection (db, "productos");
        const queryItems = categoria ? query(itemsCollection, where("categoria", "==", categoria)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setData(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                console.log(itemsCollection)      
            }else{
                console.log('error')
            }
        });
/*         const getProductos = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (productos);
            }, 1000);
        });
        if (categoria === "todos") {
            getProductos.then (res => setData(res));
            
        }else{
            getProductos.then (res => setData(res.filter (producto => producto.categoria === categoria)));
            
        } */
        
    }, [categoria])

    return (
        <div className="container-fluid row px-5 mb-5">
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer;