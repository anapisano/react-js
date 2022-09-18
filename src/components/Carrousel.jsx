import React from "react";

const Carrousel = () => {
    return (
    <div className="container-fluid d-flex justify-content-center">
        <div id="carouselExampleIndicators" className="carousel slide w-50  " data-bs-ride="true">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="/img/img_producto_casita.jpeg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item img-fluid">
                <img src="/img/img_producto_piedras.jpeg" className="d-block w-100 " alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="/img/img_producto_puna.jpeg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>   
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div></div>
    
    )
}

export default Carrousel;