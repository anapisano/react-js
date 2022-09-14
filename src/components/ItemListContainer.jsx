import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {productos} from "./arrayProductos"
import { useParams } from "react-router-dom";


const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoria} = useParams();
    console.log(categoria)

    useEffect(() =>{
        const getProductos = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (productos);
            }, 1000);
        });
        if (categoria === "todos") {
            getProductos.then (res => setData(res));
            
        }else{
            getProductos.then (res => setData(res.filter (producto => producto.categoria === categoria)));
            
        }
        

    }, [categoria])

    return (
        <div className="container-fluid row px-5 mb-5">
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer;