import React from "react";



const Item = ({ info }) => {
    const { nombre, precio, imagen} = info;
    const src = require(`${imagen}`);
  
    return (
      <div className="col-md-3 mt-4">
        <div className="card">
          <div className="card-body p-2">
            <img src={src} className="img-fluid p-1 rounded-2" width=""/>
            <h5 className="text-center p-2 fw-bold">{nombre}</h5>
            <div className="d-grid col-11 mx-auto">
              <button className="btn btn-dark" type="button">Ver detalle</button>
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