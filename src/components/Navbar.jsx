import React from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo.jpeg";

const Navbar = () => {
  return(
    <div className="container-fluid">
        <div className="row justify-content-evenly">
            <ul className="nav col-10 d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="100" alt="cria" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color_letra" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color_letra" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color_letra" href="#">Contacto</a>
                </li>
            </ul>
        
            
            <CartWidget />
            
        </div>
        <hr className="m-0"></hr>
    </div>
      
  )
}

export default Navbar