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

export const Login = () => {
  const { store, actions } = useContext(Context);
  const isDesktop = window.innerWidth >= 1000;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      await actions.syncuser();
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

  return (
    <div className="d-flex flex-column">
      <div className="margin-top-veh d-flex flex-column col-4 mx-auto">
        {" "}
        <input
          className=""
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className=""
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className=""
          onClick={() => {
            sendLogin();
          }}
        >
          {" "}
          Enviar
        </button>
      </div>
    </div>
  );
};
