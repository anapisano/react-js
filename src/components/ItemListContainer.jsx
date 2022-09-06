import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

const productos = [
    {id:1, nombre:"Casita de tela", imagen: `./img/img_producto_casita.jpeg`, precio:5000, stock: 15},
    {id:2, nombre:"Huevo con muñeco", imagen: `./img/img_producto_munieco.jpeg`, precio:2600, stock: 25},
]

const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (productos);
            }, 1000);
        });
        getData.then (res => setData(res));

    }, [])

    return (
        <div className="container-fluid row">
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer;