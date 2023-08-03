import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import taller from "../../img/taller.jpg";
import logo from "../../img/logoverde2.png";
import cruzado from "../../img/cruzado.jpg";
import herramientas from "../../img/herramientas.jpg";
import aceite from "../../img/icons/aceite.jpg";
import bujia from "../../img/icons/bujia.png";
import cadena from "../../img/icons/cadena.png";
import freno from "../../img/icons/freno.jpg";
import escape from "../../img/icons/escape.png";
import sonido from "../../img/icons/sonido.jpg";
import fondo from "../../img/fondo-web-4.jpg";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneOutbound } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import "../../styles/services.css";
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
  const stylesServices = {
    backgroundImage: `url(${herramientas})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    zIndex: "-2",
  };
  const backgroundpage = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
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
            <img src={logo} style={{ width: "40vw", height: "auto" }} />
          </div>
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
        style={backgroundpage}
      >
        <div id="who" className="col-12 d-flex flex-column mb-5">
          <div className="col-9 mx-auto d-flex p-4">
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
                ... lo que no somos el típico taller oficial
              </h2>
              <p className="col-12 who-p pe-3 pt-5  text-wrap">
                {" "}
                En{" "}
                <span className="text-my-red ">
                  <strong>Garage Llave 13</strong>
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
              <p className="col-12 who-p pe-3 pb-5 text-wrap">
                Tu tranquilidad es nuestra prioridad, y nos esforzamos en
                ofrecerte resultados de calidad respaldados por años de
                experiencia y herramientas de calidad.
              </p>
            </div>
          </div>
        </div>
        <div
          id="services"
          className="col-12 d-flex flex-column margin-top-section2"
        >
          <div className="col-9 mx-auto d-flex p-4">
            <div className="col-5 d-flex flex-column">
              <h1 className="col-12 service-h1 altura-tittle border-red-b-2">
                Nuestros servicios
              </h1>
              <p className="col-12 service-p px-3 pt-4 mt-2">
                {" "}
                En{" "}
                <span className="text-my-red">
                  <strong>Garage Llave 13</strong>
                </span>
                , ofrecemos una amplia gama de servicios para mantener tu
                vehículo en óptimas condiciones. Nuestro equipo altamente
                cualificado se encargará de realizar desde el mantenimiento
                básico hasta las reparaciones más complejas. Nos comprometemos a
                brindarte un servicio eficiente y de calidad, utilizando las
                técnicas más avanzadas y herramientas especializadas. Ya sea que
                necesites un cambio de aceite, una revisión completa o una
                reparación específica, nuestra implicación y dedicación
                garantizan que tu vehículo esté en las mejores manos.
                <br></br>{" "}
              </p>
              <p className="col-12 service-p px-3 pb-5">
                Nuestro objetivo es superar tus expectativas y ofrecerte una
                experiencia excepcional en el cuidado y mantenimiento de tu
                vehículo.<br></br>{" "}
              </p>
              <div className="col-12">
                <h2 className=" col-12 services-cita-color services-cita-size ">
                  Pide cita con nosotros
                  <span className="ms-3">
                    <i class="fa-solid fa-up-right-from-square"></i>
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-7 d-flex flex-column ">
              <h2 className="col-12 service-h2 altura-tittle border-red-b pt-2"></h2>
              <div className="col-11 mx-auto">
                {" "}
                <div className=" row mx-auto services-img mt-4">
                  <div class="flip-card mx-auto mt-5 col-5">
                    <div class="flip-card-inner col-12">
                      <div class="flip-card-front">
                        <img src={escape} className="icon-img mt-3" />
                        <p class="services-tittle-size services-tittle-color">
                          Montaje de accesorios
                        </p>
                      </div>
                      <div class="flip-card-back ">
                        <p className="services-content-color services-content-size px-4 my-b mt-3">
                          {" "}
                          Personalizamos tu moto ya sea para instalar un nuevo
                          sistema de escape, una cúpula, alforjas o cualquier
                          otro accesorio.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flip-card mx-auto mt-5 col-5">
                    <div class="flip-card-inner col-12">
                      <div class="flip-card-front">
                        <img src={bujia} className="icon-img mt-3" />
                        <p class="services-tittle-size services-tittle-color">
                          Revisión Llave 13
                        </p>
                      </div>
                      <div class="flip-card-back ">
                        <p className="services-content-color services-content-size px-4 my-b mt-3">
                          {" "}
                          Exhaustiva revisión, desde el motor hasta los frenos,
                          pasando por todos los elementos que hacen que tu moto
                          esté perfecta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flip-card mx-auto mt-5 col-5">
                    <div class="flip-card-inner col-12">
                      <div class="flip-card-front">
                        <img src={sonido} className="icon-img mt-3" />
                        <p class="services-tittle-size services-tittle-color">
                          Diagnóstico
                        </p>
                      </div>
                      <div class="flip-card-back ">
                        <p className="services-content-color services-content-size px-4 my-b mt-3">
                          {" "}
                          Identificamos cualquier problema que pueda afectar
                          tanto al rendimiento como a la vida útil de tu moto.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flip-card mx-auto mt-5 col-5">
                    <div class="flip-card-inner col-12">
                      <div class="flip-card-front">
                        <img src={cadena} className="icon-img mt-3" />
                        <p class="services-tittle-size services-tittle-color">
                          Kit de arrastre
                        </p>
                      </div>
                      <div class="flip-card-back ">
                        <p className="services-content-color services-content-size px-4 my-b mt-3">
                          {" "}
                          Lubricamos y ajustamos adecuadamente la cadena de tu
                          moto, mejorando su vida útil y transmisión de
                          potencia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flip-card mx-auto mt-5 col-5">
                    <div class="flip-card-inner col-12">
                      <div class="flip-card-front">
                        <img src={aceite} className="icon-img mt-3" />
                        <p class="services-tittle-size services-tittle-color">
                          Cambio de aceite
                        </p>
                      </div>
                      <div class="flip-card-back ">
                        <p className="services-content-color services-content-size px-4 my-b mt-3">
                          {" "}
                          Utilizamos aceite y filtro de altas prestaciones a
                          diaro para asegurar un rendimiento óptimo y una mayor
                          vida útil del motor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flip-card mx-auto my-5 col-5">
                    <div class="flip-card-inner col-12">
                      <div class="flip-card-front">
                        <img src={freno} className="icon-img mt-3" />
                        <p class="services-tittle-size services-tittle-color">
                          Mantenimiento de frenos
                        </p>
                      </div>
                      <div class="flip-card-back ">
                        <p className="services-content-color services-content-size px-4 my-b mt-3">
                          {" "}
                          Completo servicio de revisión y cambio de frenos con
                          componentes de alto rendimiento para garantizar tu
                          seguridad.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="col-12 ms-auto d-flex flex-column margin-top-section3 "
        >
          <div className="row mx-auto col-9">
            {" "}
            <div className="col-6 flex-column mt-6vh px-0">
              <h2 className="contact-h2 col-12 ms-auto pt-2 ps-5  pe-5 text-wrap">
                ¿Tienes alguna consulta o no encuentras el servicio que buscas?{" "}
                <br></br>
              </h2>
              <p className="contact-p col-12 ms-auto mt-5 ps-5 pe-5  text-wrap">
                No dudes en contactar con nosotros, estamos aquí para brindarte
                una asistencia integral y solucionar cualquier problema que
                puedas encontrar. <br></br> Tu satisfacción es nuestra
                prioridad, y estaremos encantados de ayudarte en todo lo que
                necesites respecto a tu moto.
              </p>
            </div>
            <div className="col-6 d-flex border-red-l flex-column px-0  my-auto">
              <h1 className="contact-h1 col-12  ps-5 mb-0 border-red-l-2">
                Contacto
              </h1>{" "}
              <div className="d-flex col-12">
                <p className="icons-contact ms-5">
                  {" "}
                  <SlLocationPin />
                </p>
                <h2 className="me-auto contact-adress my-auto ">
                  {" "}
                  C/ Santa n4, San Pedro Alcántara{" "}
                </h2>
              </div>
              <div className="d-flex col-12">
                <p className="icons-contact ms-5">
                  {" "}
                  <BsTelephoneOutbound />
                </p>
                <h2 className="me-auto contact-adress my-auto ">
                  {" "}
                  +34 610 03 47 73
                </h2>
              </div>
              <div className="d-flex col-12 pb-5 mb-5">
                <p className="icons-contact ms-5">
                  {" "}
                  <GoMail />
                </p>
                <h2 className="me-auto contact-adress mt-4 mb-1 ">
                  {" "}
                  moises@garage.com{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="col-12 d-flex flex-column margin-top-section4"
        >
          <h2></h2>
          <p c>© garagellave13.com 2023. Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};
