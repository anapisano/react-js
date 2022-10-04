import React, {useState, useEffect} from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoria} = useParams()

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
    }, [categoria])

    return (
        <div className="container-fluid row px-5 mb-5">
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer;