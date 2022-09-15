import React from "react";


const Footer = () => {
    return (
            <footer className="container-fluid fondo">
                <div className="d-flex align-items-center">
                    
                    <p className="col-6 color_letra justify-content-center h6">Copyright © Cría Suelta Todos los derechos reservados</p>

                    <div className="col-6 d-flex justify-content-end">
                        <ul className="d-flex p-2">
                            <li><img className="m-2" src="/img/instagram.png" width="40" alt="instagram" /></li>
                            <li><img className="m-2" src="/img/facebook.png" width="40" alt="facebook" /></li>
                            <li><img className="m-2" src="/img/youtube.png" width="40" alt="youtube" /></li>
                        </ul>

                    </div>
                </div>
            </footer>
        
    ) 
}

export default Footer;