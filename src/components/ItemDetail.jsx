import React,{ useState }  from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import swal from 'sweetalert';


const ItemDetail = ({item}) => {
    const [goToCart, setGoToCart] = useState (false)

    const onAdd = (cantidad) => {
        setGoToCart (true)
    };

    const alert = () =>{
        swal({
            text: `Sus productos han sido agregados con éxito`,
            icon: 'success',
            buttons: ["seguir comprando", "Ir al carrito"]

        }).then(function() {
            window.location.href = "http://localhost:3000/cart";
        });
    }
    
    return (
        <div className="col-4 text-center">
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <img src={item.imagen} className="img-fluid p-1 rounded-2"width=""/>
            <h4 className="card-text">${item.precio}</h4>
            {
                goToCart
                    ? alert()
                    : <ItemCount initial={1} stock={15} onAdd={onAdd} />
            }
        
        </div>

    )
}

export default ItemDetail;