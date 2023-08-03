import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import SliderBikes from "../component/sliderbikes.js";
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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    getPhotos();
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    setShowButton(!!token); // Convert token to a boolean value
  }, []);

  const getPhotos = async (routeId) => {
    if (bike) {
      setSelectedBikeImages(bike.photos);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${store.backendurl}bikes/${bike.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Bike deleted successfully");
        // Optionally, you can update your state or do other tasks after successful deletion
      } else {
        const data = await response.json();
        alert(data.message); // Display the error message using alert
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while deleting the bike."); // Display a generic error message using alert
    }
  };

  return (
    <div
      id="moto-card"
      className="col-3 mx-auto d-flex flex-column motocard px-0 my-5"
    >
      <div className="col-12">
        {" "}
        <SliderBikes data={photos} groupSize={1} />
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
      {showButton && <button onClick={handleDelete}>Borrar</button>}
    </div>
  );
};
