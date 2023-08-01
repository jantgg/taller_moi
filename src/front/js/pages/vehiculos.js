import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import { Motocard } from "../component/motocard";
import taller from "../../img/taller.jpg";
import logo from "../../img/logoverde2.png";
import cruzado from "../../img/cruzado.jpg";
import herramientas from "../../img/herramientas.jpg";
import aceite from "../../img/icons/aceite.jpg";
import bujia from "../../img/icons/bujia.png";
import cadena from "../../img/icons/cadena.png";
import freno from "../../img/icons/freno.jpg";
import fondotituloveh from "../../img/fondotituloveh.png";
import motos from "../../img/motos.jpg";
import fondo from "../../img/fondo-web-4.jpg";

import "../../styles/services.css";
import "../../styles/home.css";
import "../../styles/rows.css";
import "../../styles/vehiculos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Vehiculos = () => {
  const { store, actions } = useContext(Context);
  const isDesktop = window.innerWidth >= 1000;
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    getBikes();
  }, []);

  // const getTheBikes = async () => {
  //   try {
  //     const bikes = await actions.getBikes();
  //     setBikes(bikes);
  //   } catch (error) {
  //     // Manejar el error en caso de que ocurra.
  //     console.error("Error al obtener las bicicletas:", error);
  //   }
  // };

  const getBikes = async () => {
    const response = await fetch(store.backendurl + "bikes");
    const data = await response.json();
    const bikesWithPhotos = data.body.map((bike) => ({
      ...bike,
      photos: bike.photos.map((photo) => ({
        id: photo.id,
        url: photo.path,
      })),
    }));
    setBikes(bikesWithPhotos);
  };

  const backgroundpage = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "auto",
  };
  const stylesImgMotos = {
    backgroundImage: `url(${motos})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "45vh",
  };
  const stylesImgVeh = {
    backgroundImage: `url(${fondotituloveh})`,
    backgroundSize: "contain",
    backgroundPosition: "left",
    height: "35%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="d-flex flex-column">
      <div className="shadowed d-flex flex-column" style={stylesImgMotos}>
        <div className="col-12 d-flex flex-column h100">
          <div className="d-flex flex-column col-8 mx-auto my-auto">
            <h1 className="my-auto veh-tittle border-green-b-3 col-11">
              {" "}
              <span className="ocasion me-4">Motos </span> de ocasión
            </h1>
            <div className="border-green-t col-4"></div>
          </div>
          <div className=" col-8 mx-auto ">
            <div className=" col-3 me-auto"></div>
          </div>
        </div>
      </div>
      <div className=" d-flex flex-column" style={backgroundpage}>
        <div
          id="tittle&bar"
          className="col-6 mx-auto margin-top-veh d-flex flex-column center-text border-red-l "
        >
          <h1 className="border-red-l-2 service-h1">
            Comprar Motos de Segunda Mano revisadas
          </h1>
          <div
            id="filter"
            className="mx-auto d-flex col-10 justify-content-between"
          >
            <form class="form-inline d-flex col-5">
              <input
                class=" col-10 mr-sm-2 input-search ps-3"
                type="search"
                placeholder="🔍︎ Buscar"
                aria-label="Search"
              />
              <button
                class="boton-search my-2 my-sm-0 col-2 py-2"
                type="submit"
              >
                Buscar
              </button>
            </form>
            <button className="col-2 botonaco py-2">Scooter</button>
            <button className="col-2 botonaco py-2">Deportiva</button>
            <button className="col-2 botonaco py-2">Off-Road</button>
          </div>
        </div>
        <div className="col-12 row mx-auto">
          {bikes.map((bike, index) => (
            <Motocard data={bike} />
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          console.log(bikes[0]);
        }}
      >
        {" "}
        PUKSA AQYERU
      </button>
    </div>
  );
};
