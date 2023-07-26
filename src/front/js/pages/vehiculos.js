import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
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
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneOutbound } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import "../../styles/services.css";
import "../../styles/home.css";
import "../../styles/rows.css";
import "../../styles/vehiculos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Vehiculos = () => {
  const { store, actions } = useContext(Context);
  const isDesktop = window.innerWidth >= 1000;

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
    height: "50vh",
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
          <div
            className="d-flex flex-column col-8 mx-auto my-auto"
            style={stylesImgVeh}
          >
            <h1 className="my-auto veh-tittle">
              {" "}
              <span className="ocasion me-4">Motos </span> de ocasión
            </h1>
          </div>
          <div className=" col-8 mx-auto ">
            <div className=" col-3 me-auto"></div>
          </div>
        </div>
      </div>
      <div className="" style={backgroundpage}></div>
    </div>
  );
};
