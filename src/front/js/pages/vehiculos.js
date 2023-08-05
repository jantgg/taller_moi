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
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [isCheckedTypeSport, setIsCheckedTypeSport] = useState(false);
  const [isCheckedTypeScooter, setIsCheckedTypeScooter] = useState(false);
  const [isCheckedTypeOffRoad, setIsCheckedTypeOffRoad] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getBikes();
  }, []);

  const handleInputChangeModel = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filtered = bikes.filter((car) =>
      car.model.toLowerCase().includes(value)
    );
    setFilteredBikes(filtered);
    setIsCheckedTypeScooter(false);
    setIsCheckedTypeOffRoad(false);
    setIsCheckedTypeSport(false);
  };

  const handleFilterClickTypeSport = () => {
    setIsCheckedTypeSport((prevState) => !prevState);

    if (!isCheckedTypeSport) {
      const filtered = bikes.filter(
        (bike) => bike.type_moto.toLowerCase() === "deportiva"
      );
      setFilteredBikes(filtered);
      setIsCheckedTypeScooter(false);
      setIsCheckedTypeOffRoad(false);
    } else {
      setFilteredBikes(bikes);
    }
  };
  const handleFilterClickTypeScooter = () => {
    setIsCheckedTypeScooter((prevState) => !prevState);

    if (!isCheckedTypeScooter) {
      const filtered = bikes.filter(
        (bike) => bike.type_moto.toLowerCase() === "scooter"
      );
      setFilteredBikes(filtered);
      setIsCheckedTypeSport(false);
      setIsCheckedTypeOffRoad(false);
    } else {
      setFilteredBikes(bikes);
    }
  };
  const handleFilterClickTypeOffRoad = () => {
    setIsCheckedTypeOffRoad((prevState) => !prevState);

    if (!isCheckedTypeOffRoad) {
      const filtered = bikes.filter(
        (bike) => bike.type_moto.toLowerCase() === "off-road"
      );
      setFilteredBikes(filtered);
      setIsCheckedTypeSport(false);
      setIsCheckedTypeScooter(false);
    } else {
      setFilteredBikes(bikes);
    }
  };

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
    setFilteredBikes(bikesWithPhotos);
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
      <div
        id="fondo-ocasion"
        className="shadowed d-flex flex-column"
        style={stylesImgMotos}
      >
        <div className="col-12 d-flex flex-column h100">
          <div className="d-flex flex-column col-10 col-sm-11 col-md-11	col-lg-10	col-xl-8	col-xxl-8 mx-auto my-auto">
            <h1 className="my-auto veh-tittle border-green-b-3 ">
              {" "}
              <span className="ocasion ">Motos </span> de ocasión
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
          className="col-11 col-sm-11 col-md-11	col-lg-10	col-xl-10	col-xxl-6 mx-auto margin-top-veh row center-text border-red-l "
        >
          <h1 className="border-red-l-2 service-h1 mb-3 py-3">
            Buscar Motos de Segunda Mano Revisadas
          </h1>
          <div
            id="filter"
            className="mx-auto  col-12 col-sm-12 col-md-12	col-lg-11	col-xl-11	col-xxl-11 justify-content-between row"
          >
            <form class="form-inline d-flex  col-11 col-sm-11 col-md-11	col-lg-10	col-xl-5	col-xxl-5 my-3 px-0 mx-auto">
              <input
                className=" col-10 mr-sm-2 input-search ps-3"
                type="text"
                value={searchText}
                onChange={handleInputChangeModel}
                placeholder="Buscar por modelo"
              />

              <button class="boton-search my-sm-0 col-2 py-2" type="submit">
                🔍︎
              </button>
            </form>
            <button
              style={{ background: isCheckedTypeScooter ? "#22ac00" : "" }}
              onClick={handleFilterClickTypeScooter}
              className="col-8 col-sm-8 col-md-8	col-lg-3	col-xl-2	col-xxl-2 botonaco py-2 my-3 mx-auto"
            >
              Scooter
            </button>
            <button
              style={{ background: isCheckedTypeSport ? "#22ac00" : "" }}
              onClick={handleFilterClickTypeSport}
              className="col-8 col-sm-8 col-md-8	col-lg-3	col-xl-2	col-xxl-2 botonaco py-2 my-3 mx-auto"
            >
              Deportiva
            </button>
            <button
              style={{ background: isCheckedTypeOffRoad ? "#22ac00" : "" }}
              onClick={handleFilterClickTypeOffRoad}
              className="col-8 col-sm-8 col-md-8	col-lg-3	col-xl-2	col-xxl-2 botonaco py-2 my-3 mx-auto"
            >
              Off-Road
            </button>
          </div>
        </div>
        <div className="col-11 row mx-auto">
          {filteredBikes.map((bike, index) => (
            <Motocard data={bike} />
          ))}
        </div>
      </div>
    </div>
  );
};
