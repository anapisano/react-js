import React from "react";
import { Link } from "react-router-dom";



const Item = ({ info }) => {
    const { nombre, imagen} = info;
  
    return (
      <div className="col-md-3 mt-4">
        <div className="card">
          <div className="card-body p-2">
            <img src={imagen} className="img-fluid p-1 rounded-2" width="" alt=""/>
            <h5 className="text-center p-2 fw-bold">{nombre}</h5>
            <div className="d-grid col-11 mx-auto">
              <button className="btn btn-dark" type="button">
                <Link className="nav-link color_letra" to={`/productos/${info.categoria}/${info.id}`}>Ver detalle</Link>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  };


export default Item;