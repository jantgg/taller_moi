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
    zIndex: "-2",
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
        className="d-flex col-12 flex-column section-1 margin-top-section1"
      >
        <div className="col-12 d-flex flex-column">
          <div id="fancy-borders" className="col-8 mx-auto d-flex p-4">
            <div className="col-5 d-flex flex-column">
              {" "}
              <img src={cruzado} style={{ width: "100%", height: "" }} />
              <div className="col-12 text-black border-red-r pb-5 mt-5">
                {" "}
                <p className="comment col-10 ms-auto pe-4 pt-3 border-red-r-2">
                  "Nuestra promesa es brindarte la tranquilidad de confiar en un
                  taller profesional y comprometido que cuidará de tu vehículo
                  con la seriedad y la implicación que merece." <br></br>{" "}
                  <strong>-- Moi Benitez</strong>
                </p>
                <p className="comment col-10 ms-auto pe-4 pt-3"></p>
              </div>
            </div>
            <div className="col-7 d-flex flex-column ps-5">
              <h1 className="col-12 who-h1 pt-5">¿Quiénes somos?</h1>
              <h2 className="col-12 who-h2 pt-3">
                ... No somos el típico taller oficial
              </h2>
              <p className="col-12 who-p pe-5 pt-5">
                {" "}
                En{" "}
                <span className="text-my-red ">
                  <strong>llave 13</strong>
                </span>
                , somos un equipo de profesionales apasionados por la mecánica y
                comprometidos en brindarte el mejor servicio para tu vehículo.
                Nos destacamos por nuestra profesionalidad y seriedad, rompiendo
                con los estereotipos de los talleres convencionales. Nuestra
                vocación por ayudarte nos impulsa a ofrecerte soluciones
                personalizadas y cercanas a tus necesidades. Nos implicamos
                totalmente en cada proyecto, dedicando la atención y el cuidado
                que tu vehículo merece.<br></br>{" "}
              </p>
              <p className="col-12 who-p pe-5 pb-5">
                Tu tranquilidad es nuestra prioridad, y nos esforzamos en
                ofrecerte resultados de calidad respaldados por años de
                experiencia y herramientas de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
