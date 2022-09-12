import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {productos} from "./productos"


const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getProductos = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (productos);
            }, 1000);
        });
        getProductos.then (res => setData(res));

    }, [])

    return (
        <div className="container-fluid row px-5 mb-5">
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer;