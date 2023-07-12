import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import taller from "../../img/taller.jpg";
import logo from "../../img/logorojo.png";
import cruzado from "../../img/cruzado.jpg";
import numerogris from "../../img/13gris.png";

import "../../styles/home.css";
import "../../styles/rows.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [isInViewH, setIsInViewH] = useState(false);
  const isDesktop = window.innerWidth >= 1000;
  const startRef = useRef(null);

  const scrollToStart = () => {
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".navbar-scrolled").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 100%",
        end: "bottom 0%",
        onEnter: () => {
          setIsInViewH(true); // Establecer el estado en true cuando se cumple la condición
        },
        onLeave: () => {
          setIsInViewH(false); // Establecer el estado en false cuando no se cumple la condición
        },
        onEnterBack: () => {
          setIsInViewH(true);
        },
        onLeaveBack: () => {
          setIsInViewH(false);
        },
      });
    });
  }, []);

  const stylesImgTaller = {
    backgroundImage: `url(${taller})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  const stylesbackground1 = {
    backgroundImage: `url(${numerogris})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div className="text-center d-flex flex-column">
      <div
        className="landing-img d-flex col-12 flex-column"
        style={stylesImgTaller}
      >
        <div className="col-3 text-white mx-auto my-auto center-text">
          {" "}
          <div className={`container-logo ${isInViewH ? " " : "  hided"}`}>
            <img src={logo} style={{ width: "40vw", height: "35vh" }} />
          </div>
          {/* <div
            className={`main-logo ${
              isInViewH ? " text-white" : "hided text-black"
            }`}
          >
            <div className="d-flex border-all-r w100 bg-black">
              <div className="col-2 center-text my-auto engranje py-1">
                {" "}
                <i class="fa-solid fa-gear"></i>
              </div>
              <div className="col-10 border-left-r px-2 center-text py-1">
                {" "}
                GARAGE LLAVE 13
              </div>
            </div>
          </div> */}
          <a class="container-arrow" onClick={scrollToStart}>
            <span>
              <i class="fa-solid fa-chevron-down"></i>{" "}
            </span>
          </a>
        </div>
      </div>
      <div
        id="start"
        ref={startRef}
        className="d-flex col-12 flex-column section-1"
      >
        <div className="col-12 d-flex flex-column" style={stylesbackground1}>
          <div className="col-8 mx-auto d-flex">
            <div className="col-4">
              {" "}
              <img src={cruzado} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-8 d-flex flex-cloumn">
              <h1 className="text-black">¿Quienes somos?</h1>
              <h2 className="text-black">
                ... No somos el tipico taller oficial
              </h2>
              <p className="text-black">
                {" "}
                En llave 13 contamos con más de 20 años de experiencia en el
                sector de la mecánica
              </p>
              <p className="text-black"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
