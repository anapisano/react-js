import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemCount, setItemCount] = useState (initial);

    const quitarItems = () => {
        if(itemCount > 0) {
            setItemCount (itemCount - 1)
            }
    }

    const agregarItems = () => {
        if(itemCount < stock) {
        setItemCount (itemCount + 1)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-8 ">
                    <div className="input-group">
                        <input className="btn btn-secondary" type="button" value="-" onClick={quitarItems}  />
                        <input className="form-control" type="text" value={itemCount} onChange={()=>{}} />
                        <input className="btn btn-secondary" type="button" value="+" onClick={agregarItems} />
                        
                    </div>
                    <div className="d-grid pt-3 gap-2">
                        <input className="btn btn-secondary" type="button" value="agregar" onClick={() =>
                        onAdd(itemCount)}/>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ItemCount;