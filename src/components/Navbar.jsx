import React from "react";
import Cartwidget from "./cartwidget";
import logo from "./img/logo.jpeg";

const Navbar = () =>{
  return(
      <div className="container-fluid">
        <ul className="nav d-flex align-items-center">
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
        <Cartwidget />
        <hr></hr>
      </div>
  )
}

export default Navbar