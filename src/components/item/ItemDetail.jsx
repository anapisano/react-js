import React,{ useState, useContext }  from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css';


const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)
   
    const [goToCart, setGoToCart] = useState (false)

    const onAdd = (cantidad) => {
        setGoToCart (true)
        addItem (item, cantidad)
    };
    
    return (
        <div className="item-card container-fluid row col-6  text-center">
            <div className="col-7 ">
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <h4 className="card-text">${item.precio}</h4>
                {
                    goToCart
                        ? <Link to={"/cart"}>Ir al Carrito</Link>
                        : <ItemCount initial={1} stock={15} onAdd={onAdd} />
                }
            </div>
            <div className="col-5 p-0 ">
                <img src={item.imagen} className="img-fluid p-0 rounded-3"width=""/>
            </div>
            
            
            
        
        </div>

    )
}

export default ItemDetail;