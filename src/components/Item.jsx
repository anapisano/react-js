import React from "react";
import ItemCount from "./ItemCount";


const Item = ({ info }) => {
    const { nombre, precio, imagen} = info;
    const src = require(`${imagen}`);
  
    return (
      <div className="col-md-3 mt-4">
        <div className="card">
          <div className="card-body p-2">
            <img src={src} className="img-fluid p-1 rounded-2" width=""/>
            <div className="d-flex justify-content-between p-2">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">${precio}</p>
            </div>
            
            <div >        
            <ItemCount stock={info.stock} initial={1} onAdd={0}/>
            </div>
          </div>
        </div>
      </div>
    );
  };

/* const Item = ({info}) => {
    return (
        
    )
} */

export default Item;