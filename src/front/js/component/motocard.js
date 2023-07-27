import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import motos from "../../img/motos.jpg";

import "../../styles/services.css";
import "../../styles/home.css";
import "../../styles/rows.css";
import "../../styles/vehiculos.css";
import "../../styles/motocard.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Motocard = () => {
  const { store, actions } = useContext(Context);
  const isDesktop = window.innerWidth >= 1000;

  return (
    <div
      id="moto-card"
      className="col-3 mx-auto d-flex flex-column motocard px-0 my-5"
    >
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={motos} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={motos} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={motos} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="content-card" className="col-12 d-flex flex-column px-4 ">
        <div className="col-12 motocard-brand mt-5">Vespa</div>
        <div className="col-12 motocard-model">Modelo 2000 400</div>
        <div className="col-12 d-flex mt-3">
          <div className="motocard-btn py-1 px-2 me-2">Scooter</div>
          <div className="motocard-btn py-1 px-2 mx-2">2020</div>
          <div className="motocard-btn py-1 px-2 mx-2">5000KM</div>
          <div className="motocard-btn py-1 px-2 ms-2">AM</div>
        </div>
        <div className="col-12 flex-cloumn mt-4">
          <h3 className="motocard-description-tittle">Descripción</h3>
          <p className="motocard-description">
            {" "}
            La moto está es un estado casi perfecto, presenta un arañazo en el
            lado izquierdo. Está completamente revisada y al día.
          </p>
        </div>
        <div className="ms-auto motocard-price mb-4 me-4 mt-4">2000€</div>
      </div>
    </div>
  );
};
