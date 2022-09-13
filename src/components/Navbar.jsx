import React from "react";
import CartWidget from "./CartWidget";
import logo from "./img/logo.jpeg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="container-fluid fondo">
        <div className="row justify-content-evenly">
            <ul className="nav col-10 d-flex align-items-center">
                <li className="nav-item p-2">
                    <a className="nav-link active" aria-current="page" href="/"><img src={logo} width="100" alt="cria" /></a>
                </li>
                <li className="nav-item p-2">
                    <NavLink className="nav__link color_letra" to="/productos/tela">Productos de tela</NavLink>
                </li>
                <li className="nav-item p-2">
                    <NavLink className="nav__link color_letra" to="/productos/madera">Productos de madera</NavLink>
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