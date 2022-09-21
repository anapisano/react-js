import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="container-fluid fondo">
        <div className="d-flex flex-row ">
            <ul className="nav col-10 d-flex align-items-center">
                <li className="nav-item p-2">
                    <a className="nav-link active" aria-current="page" href="/"><img src="/img/logo.jpeg" width="100" alt="cria" /></a>
                </li>
                <div className="dropdown fondo">
                    <button className="btn btn-secondary dropdown-toggle fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </button>
                    <ul className="dropdown-menu">
                        <li><NavLink className="nav__link dropdown-item color_letra " to="/productos/todos">Ver todos los productos</NavLink></li>
                        <li><NavLink className="nav__link dropdown-item color_letra" to="/productos/tela">Productos de tela</NavLink></li>
                        <li><NavLink className="nav__link dropdown-item color_letra" to="/productos/madera">Productos de madera</NavLink></li>
                    </ul>
                </div>
                <li className="nav-item p-2">
                <NavLink className="nav__link color_letra" to="/productos">Nosotros</NavLink>
                </li>
                <li className="nav-item p-2">
                    <NavLink className="nav__link color_letra" to="/productos">Contacto</NavLink>
                </li>
                <li>
                    
                </li>
            </ul>
            <div className="col-1 d-flex align-items-center justify-content-center "><NavLink className="nav__link color_letra"to={'/cart'}><CartWidget /> </NavLink></div>
            
                     
        </div>

        <hr className="m-0"></hr>
    </div>
      
  )
}

export default Navbar