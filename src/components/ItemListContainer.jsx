import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {productos} from "./arrayProductos"
import { useParams } from "react-router-dom";


const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        const getProductos = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (productos);
            }, 1000);
        });
        if (categoriaId) {
            getProductos.then (res => setData(res.filter (producto => producto.categoria === categoriaId)));
            console.log (productos)
        }else{
            getProductos.then (res => setData(res));
        }
        

    }, [categoriaId])

    return (
        <div className="container-fluid row px-5 mb-5">
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer;