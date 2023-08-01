import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import { Motocard } from "../component/motocard";
import NewSlider from "../component/newslider.js";
import "../../styles/services.css";
import "../../styles/home.css";
import "../../styles/rows.css";
import "../../styles/vehiculos.css";

export const UpdateMotos = () => {
  const { store, actions } = useContext(Context);
  const isDesktop = window.innerWidth >= 1000;

  const [model, setModel] = useState([]);
  const [brand, setBrand] = useState([]);
  const [type_moto, setType] = useState([]);
  const [description, setDescription] = useState([]);
  const [year, setYear] = useState([]);
  const [kms, setKms] = useState([]);
  const [carnet, setCarnet] = useState([]);
  const [price, setPrice] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [result, setResult] = useState(null);
  const [previewPhotos, setPreviewPhotos] = useState(null);

  const sendLogin = async () => {
    const response = await fetch(store.backendurl + "login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      console.log("OKOKOKOKOKOKOKOKOK");
      // setTimeout(() => {
      //   setMoveOut(true);
      //   setTimeout(() => {
      //     navigate("/");
      //   }, 400);
      // }, 40);
    } else {
      console.log("ERROR ERROR ERROR");
      setCredentialsError(true);
    }
  };

  const uploadBike = async () => {
    const formData = new FormData();
    if (photos) {
      for (let i = 0; i < photos.length; i++) {
        formData.append("files", photos[i]);
      }
    }
    formData.append(
      "bike_data",
      JSON.stringify({
        model: model,
        brand: brand,
        type_moto: type_moto,
        year: year,
        kms: kms,
        carnet: carnet,
        description: description,
        price: price,
      })
    );
    const response = await fetch(store.backendurl + "photos", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.ok) {
      console.log(response.data);
      console.log("OKOKOKKOKOKOKOKOK");
      // 8;
      // setRouteSend(true);
      location.reload();
    } else {
      setResult(response);
    }
  };

  const inputRoutePhotos = (event) => {
    const selectedFiles = event.target.files;
    const urls = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const url = URL.createObjectURL(selectedFiles[i]);
      urls.push(url);
    }
    setPhotos(selectedFiles);
    setPreviewPhotos(urls);
  };

  return (
    <div className="d-flex flex-column">
      <div className="margin-top-veh d-flex flex-column col-4 mx-auto">
        <div className="who-h1"> SUBIR NUEVA MOTO</div>{" "}
        {result != null ? (
          <div className="bg-danger"> FALLO EN LA SUBIDA vuelve a logear</div>
        ) : (
          <></>
        )}
        <input
          className="ps-2 my-2"
          placeholder="Marca"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></input>
        <input
          className="ps-2 my-2"
          placeholder="Modelo"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        ></input>
        <input
          className="ps-2 my-2"
          placeholder="Año"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        ></input>
        <select
          className="ps-2 my-2"
          value={type_moto}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="null">Tipo de moto</option>
          <option value="Deportiva">Deportiva</option>
          <option value="Scooter">Scooter</option>
          <option value="Off-road">Off-Road</option>
        </select>
        <input
          className="ps-2 my-2"
          placeholder="Kms"
          value={kms}
          onChange={(e) => setKms(e.target.value)}
        ></input>
        <input
          className="ps-2 my-2"
          placeholder="Carnet"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        ></input>
        <input
          className="ps-2 my-2"
          placeholder="Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          className="ps-2 my-2"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <div className="user-box my-2">
          <input
            onChange={inputRoutePhotos}
            type="file"
            accept="image/jpeg, image/png"
            multiple
          />
          <label htmlFor="photo">Fotos de la moto</label>
        </div>
        <button
          className=""
          onClick={() => {
            uploadBike();
          }}
        >
          {" "}
          Enviar
        </button>
        <div className={`image-upload col-12 mt-2 center-align bg-black `}>
          {previewPhotos != null ? (
            <NewSlider data={previewPhotos} groupSize={1} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
