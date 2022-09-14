import React from "react";
import ig from "img/instagram.png";
import fc from "img/facebook.png";
import yt from "img/youtube.png";

const Footer = () => {
    return (
            <footer className="container-fluid fondo">
                <div className="d-flex align-items-center">
                    
                    <p className="col-6 color_letra justify-content-center h6">Copyright © Cría Suelta Todos los derechos reservados</p>

                    <div className="col-6 d-flex justify-content-end">
                        <ul className="d-flex p-2">
                            <li><img className="m-2" src={ig} width="40" alt="instagram" /></li>
                            <li><img className="m-2" src={fc} width="40" alt="facebook" /></li>
                            <li><img className="m-2" src={yt} width="40" alt="youtube" /></li>
                        </ul>

                    </div>
                </div>
            </footer>
        
    ) 
}

export default Footer;