import React from "react";
import CartWidget from "./CartWidget";
import logo from "../public/img/logo.jpeg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="container-fluid fondo">
        <div className="row justify-content-evenly">
            <ul className="nav col-10 d-flex align-items-center">
                <li className="nav-item p-2">
                    <a className="nav-link active" aria-current="page" href="/"><img src={logo} width="100" alt="cria" /></a>
                </li>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle color_fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </button>
                    <ul className="dropdown-menu">
                        <li><NavLink className="nav__link dropdown-item color_letra" to="/productos/todos">Ver todos los productos</NavLink></li>
                        <li><NavLink className="nav__link dropdown-item color_letra" to="/productos/tela">Productos de tela</NavLink></li>
                        <li><NavLink className="nav__link dropdown-item color_letra" to="/productos/madera">Productos de madera</NavLink></li>
                    </ul>
                </div>
                <li className="nav-item p-2">
                </li>
                <li className="nav-item p-2">
                </li>
                <li className="nav-item p-2">
                <NavLink className="nav__link color_letra" to="/productos">Nosotros</NavLink>
                </li>
                <li className="nav-item p-2">
                    <NavLink className="nav__link color_letra" to="/productos">Contacto</NavLink>
                </li>
            </ul>
            <CartWidget />          
        </div>

        <hr className="m-0"></hr>
    </div>
      
  )
}

export default Navbar