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

export const Motocard = (content) => {
  const { store, actions } = useContext(Context);
  const isDesktop = window.innerWidth >= 1000;
  const [selectedBikeImages, setSelectedBikeImages] = useState([]);
  const photos = selectedBikeImages.map((obj) => obj.url);
  const bike = content.data;

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async (routeId) => {
    if (bike) {
      setSelectedBikeImages(bike.photos);
    }
  };

  return (
    <div
      id="moto-card"
      className="col-3 mx-auto d-flex flex-column motocard px-0 my-5"
    >
      <div
        id={bike.model + bike.id}
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={photo}
                className="d-block col-12 sizeimgcarousel"
                alt="..."
              />
            </div>
          ))}
          {/* <div className="carousel-item active">
            <img src={motos} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={motos} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={motos} className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target={`#${bike.model + bike.id}`}
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
          data-bs-target={`#${bike.model + bike.id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        id="content-card"
        className="col-12 d-flex flex-column px-4 bg-white"
      >
        <div className="col-12 motocard-brand mt-5">{bike.brand}</div>
        <div className="col-12 motocard-model">{bike.model}</div>
        <div className="col-12 d-flex mt-3">
          <div className="motocard-btn py-1 px-2 me-2">{bike.type_moto}</div>
          <div className="motocard-btn py-1 px-2 mx-2">{bike.year}</div>
          <div className="motocard-btn py-1 px-2 mx-2">{bike.kms} KM</div>
          <div className="motocard-btn py-1 px-2 ms-2">{bike.carnet}</div>
        </div>
        <div className="col-12 flex-cloumn mt-4">
          <h3 className="motocard-description-tittle">Descripción</h3>
          <p className="motocard-description"> {bike.description}</p>
        </div>
        <div className="ms-auto motocard-price mb-4 me-4 mt-4">
          {bike.price} €
        </div>
      </div>
      <button
        onClick={() => {
          console.log(photos);
        }}
      >
        {" "}
        a ver
      </button>
    </div>
  );
};
