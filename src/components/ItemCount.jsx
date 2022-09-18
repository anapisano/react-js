import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemInitial, setItemInitial] = useState (initial);

    const quitarItems = () => {
        if(itemInitial > 0) {
            setItemInitial (itemInitial - 1)
            }
    }

    const agregarItems = () => {
        if(itemInitial < stock) {
        setItemInitial (itemInitial + 1)
        }
    }

/*     const [itemStock, setItemStock] = useState (stock);
    const [itemInitial, setItemInitial] = useState (initial);
    const [itemAdd, setItemAdd] = useState (onAdd);

    const quitarItems = (valor) => {
        if (valor > 0) {
            setItemInitial(valor);
        }
    }
    
    const agregarItems = (valor) => {
        if (valor <= itemStock) {
            setItemInitial(valor);
        }
    }

    const agregarProducto = () =>{
        if (itemInitial <= itemStock) {
            setItemStock (itemStock - itemInitial);
            setItemAdd (itemAdd + itemInitial)
        }
    } */

    return (
        <div className="container-fluid">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-10 ">
                    <div className="input-group">
                        <input className="btn btn-secondary" type="button" value="-" onClick={quitarItems}  />
                        <input className="form-control" type="text" value={itemInitial} onChange={()=>{}} />
                        <input className="btn btn-secondary" type="button" value="+" onClick={agregarItems} />
                        
                    </div>
                    <div className="d-grid pt-3 gap-2">
                        <input className="btn btn-secondary" type="button" value="agregar" onClick={() =>
                        onAdd(itemInitial)}/>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ItemCount;