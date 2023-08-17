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
import fondo_final from "../../img/fondo_final.jpg";
import llave13gris from "../../img/LLAVE13GRIS.png";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneOutbound } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import "../../styles/services.css";
import "../../styles/home.css";
import "../../styles/rows.css";
import "../../styles/animations.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [isInViewH, setIsInViewH] = useState(false);
  const [isInViewH2, setIsInViewH2] = useState(false);
  const [isInViewH3, setIsInViewH3] = useState(false);
  const [isInViewH4, setIsInViewH4] = useState(false);
  const [isInViewH5, setIsInViewH5] = useState(false);
  const [isInViewH6, setIsInViewH6] = useState(false);
  const [isInViewH7, setIsInViewH7] = useState(false);
  const [isInViewH8, setIsInViewH8] = useState(false);
  const isDesktop = window.innerWidth >= 1000;
  const startRef = useRef(null);

  const scrollToStart = () => {
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".slide-in-element").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 100%",
        end: "bottom 0%",
        onEnter: () => {
          setIsInViewH2(true); // Establecer el estado en true cuando se cumple la condición
        },
      });
    });
    gsap.utils.toArray(".navbar-scrolled").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 50%",
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
    gsap.utils.toArray(".slide-in-comment").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 90%",
        end: "bottom 0%",
        onEnter: () => {
          setIsInViewH3(true); // Establecer el estado en true cuando se cumple la condición
        },
      });
    });
    gsap.utils.toArray(".slide-in-cita").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 0%",
        onEnter: () => {
          setIsInViewH4(true); // Establecer el estado en true cuando se cumple la condición
        },
      });
    });
    gsap.utils.toArray(".slide-in-services").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 0%",
        onEnter: () => {
          setIsInViewH5(true); // Establecer el estado en true cuando se cumple la condición
          setTimeout(() => {
            setIsInViewH6(true);
          }, 400);
        },
      });
    });
    gsap.utils.toArray(".slide-in-contact").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 0%",
        onEnter: () => {
          setIsInViewH7(true);
          setIsInViewH8(true);
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
    backgroundImage: `url(${fondo_final})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  const backgroundllave13 = {
    backgroundImage: `url(${llave13gris})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  const handleMapLinkClick = () => {
    const formattedAddress = store.direccion.replace(/\s/g, "+");
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="text-center d-flex flex-column">
      <div
        className="landing-img d-flex col-12 flex-column"
        style={stylesImgTaller}
      >
        <div className="col-3 text-white mx-auto my-auto center-text">
          {" "}
          <div className={`container-logo ${isInViewH ? " " : "  "}`}>
            <img src={logo} className="main-logo-size" />
          </div>
          <a class="container-arrow" onClick={scrollToStart}>
            <span className="">
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
          <div className=" mx-auto d-flex p-4 col-12 col-sm-12	col-md-12	col-lg-11	col-xl-10	col-xxl-9 row px-0">
            <div className="col-12 col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-5 d-flex flex-column">
              {" "}
              <img
                src={cruzado}
                style={{ width: "100%", height: "", zIndex: "90" }}
              />
              <div className="col-12 text-black border-red-r pb-5 mt-5">
                {" "}
                <p
                  className={`slide-in-comment comment col-10 ms-auto pe-4 pt-3 border-red-r-2 ${
                    isInViewH3 ? "slide-in-top" : "hided"
                  }`}
                >
                  "Nuestra promesa es brindarte la tranquilidad de confiar en un
                  taller que cuidará de tu vehículo con la seriedad e
                  implicación que merece." <br></br>{" "}
                  <strong className="green-strong">- Moi Benitez</strong>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-7 d-flex flex-column p-4">
              <h1 className="col-12 who-h1 pt-5">¿Quiénes somos?</h1>
              <h2
                className={`slide-in-element col-12 who-h2 pt-3 mb-0 ${
                  isInViewH2 ? "slide-in-left" : "hided"
                }`}
              >
                ... no somos el típico taller oficial
              </h2>
              <p className="col-12 who-p px-3 pt-5 mb-0 text-wrap">
                {" "}
                En{" "}
                <span className="text-my-red ">
                  <strong className="green-strong">Garage Llave 13</strong>
                </span>
                , somos un equipo de profesionales apasionados por la mecánica y
                comprometidos en brindarte el mejor servicio para tu vehículo.
                Nos destacamos por nuestra{" "}
                <strong className="green-strong">
                  {" "}
                  profesionalidad y seriedad
                </strong>
                , rompiendo con los estereotipos de los talleres convencionales.
                Nuestra vocación por ayudarte nos impulsa a ofrecerte soluciones
                personalizadas y cercanas a tus necesidades. Tenemos una{" "}
                <strong className="green-strong"> implicación total</strong> en
                cada proyecto, dedicando la atención y el cuidado que tu
                vehículo merece.<br></br>{" "}
              </p>
              <p className="col-12 who-p px-3 pb-5 text-wrap">
                <strong className="green-strong">
                  Tu tranquilidad es nuestra prioridad
                </strong>
                , y nos esforzamos en ofrecerte resultados de calidad
                respaldados por años de experiencia y herramientas de calidad.
              </p>
            </div>
          </div>
        </div>
        <div
          id="services"
          className="col-12 d-flex flex-column margin-top-section2"
        >
          <div className="col-12 col-sm-12	col-md-12	col-lg-11	col-xl-10	col-xxl-9 row  mx-auto d-flex p-4">
            <div className="col-12 col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-5 d-flex flex-column px-0">
              <h1 className="col-12 service-h1 altura-tittle border-red-b-2 mb-0">
                ¿Qué podemos ofrecer?
              </h1>
              <p className="col-12 service-p px-3 pt-4 pb-3 mb-0">
                {" "}
                En{" "}
                <span className="text-my-red">
                  <strong className="green-strong">Garage Llave 13</strong>
                </span>
                , ofrecemos una amplia gama de servicios para mantener tu
                vehículo en óptimas condiciones. Nuestro equipo altamente
                cualificado se encargará de realizar desde el mantenimiento
                básico hasta las reparaciones más complejas. Nos comprometemos a
                brindarte un{" "}
                <strong className="green-strong"> servicio eficiente</strong> y
                de <strong className="green-strong"> calidad</strong>,
                utilizando las técnicas más avanzadas y herramientas
                especializadas. Ya sea que necesites un cambio de aceite, una
                revisión completa o una reparación específica, nuestra{" "}
                <strong className="green-strong"> implicación</strong> y{" "}
                <strong className="green-strong"> dedicación</strong> garantizan
                que tu vehículo esté en las mejores manos.
                <br></br>{" "}
              </p>
              <p className="col-12 service-p px-3 mb-5 ">
                Nuestro objetivo es superar tus expectativas y ofrecerte una
                <strong className="green-strong">
                  {" "}
                  experiencia excepcional
                </strong>{" "}
                en el cuidado y mantenimiento de tu vehículo.<br></br>{" "}
              </p>
              <div className="col-12">
                <a
                  href={`http://${store.citas}`}
                  target="_blank"
                  className={`slide-in-cita col-12 services-cita-color services-cita-size my-link ${
                    isInViewH4 ? "slide-in-bottom" : "hided"
                  }`}
                >
                  Pide cita con nosotros
                  <span className="ms-3">
                    <i class="fa-solid fa-up-right-from-square"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-7 d-flex flex-column px-0">
              <h2 className="col-12 service-h2 altura-tittle border-red-b pt-2"></h2>
              <div className="col-11 mx-auto">
                {" "}
                <div className="slide-in-services row mx-auto services-img mt-4">
                  <div
                    className={` flip-card mx-auto mt-5 col-10 col-sm-10 col-md-10	col-lg-5	col-xl-5	col-xxl-5 ${
                      isInViewH5 ? "slide-in-right" : "hided"
                    }`}
                  >
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
                          Personalizamos tu moto ya sea para{" "}
                          <strong className="green-strong"> instalar</strong> un
                          nuevo sistema de escape, una cúpula, alforjas o
                          cualquier otro accesorio.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` flip-card mx-auto mt-5 col-10 col-sm-10 col-md-10	col-lg-5	col-xl-5	col-xxl-5 ${
                      isInViewH6 ? "slide-in-right" : "hided"
                    }`}
                  >
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
                          <strong className="green-strong">
                            Exhaustiva revisión
                          </strong>
                          , desde el motor hasta los frenos, pasando por todos
                          los elementos que hacen que tu moto esté perfecta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` flip-card mx-auto mt-5 col-10 col-sm-10 col-md-10	col-lg-5	col-xl-5	col-xxl-5 ${
                      isInViewH5 ? "slide-in-right" : "hided"
                    }`}
                  >
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
                          Identificamos{" "}
                          <strong className="green-strong">
                            {" "}
                            cualquier problema
                          </strong>{" "}
                          que pueda afectar tanto al rendimiento como a la vida
                          útil de tu moto.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` flip-card mx-auto mt-5 col-10 col-sm-10 col-md-10	col-lg-5	col-xl-5	col-xxl-5 ${
                      isInViewH6 ? "slide-in-right" : "hided"
                    }`}
                  >
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
                          moto, mejorando su{" "}
                          <strong className="green-strong"> vida útil</strong> y
                          transmisión de potencia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` flip-card mx-auto mt-5 col-10 col-sm-10 col-md-10	col-lg-5	col-xl-5	col-xxl-5 ${
                      isInViewH5 ? "slide-in-right" : "hided"
                    }`}
                  >
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
                          diaro para asegurar el{" "}
                          <strong className="green-strong">
                            {" "}
                            mejor rendimiento
                          </strong>{" "}
                          y una mayor vida útil del motor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` flip-card mx-auto mt-5 col-10 col-sm-10 col-md-10	col-lg-5	col-xl-5	col-xxl-5 ${
                      isInViewH6 ? "slide-in-right" : "hided"
                    }`}
                  >
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
                          <strong className="green-strong"> seguridad</strong>.
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
          className=" slide-in-contact col-12 col-sm-12 col-md-12 col-lg-12	col-xl-12	col-xxl-9 row mx-auto margin-top-section3 "
        >
          {" "}
          <div
            className={`col-12 col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-6 flex-column mt-6vh px-0 ${
              isInViewH7 ? "scale-in-hor-right" : "hided"
            }`}
          >
            <h2 className="contact-h2 col-12 ms-auto pt-2 ps-5  pe-5 text-wrap">
              ¿Tienes alguna consulta o no encuentras el servicio que buscas?{" "}
              <br></br>
            </h2>
            <p className="contact-p col-12 ms-auto mt-5 ps-5 pe-5  text-wrap">
              No dudes en contactar con nosotros, estamos aquí para brindarte
              una <strong className="green-strong">asistencia integral</strong>{" "}
              y solucionar cualquier problema que puedas encontrar. <br></br>{" "}
              <strong className="green-strong">
                Tu satisfacción es nuestra prioridad
              </strong>
              , y estaremos encantados de ayudarte en todo lo que necesites
              respecto a tu moto.
            </p>
          </div>
          <div
            className={`col-11 col-sm-11 col-md-11	col-lg-6	col-xl-6	col-xxl-6 d-flex border-red-l flex-column px-0  my-auto mx-auto ${
              isInViewH8 ? "scale-in-hor-left" : "hided"
            }`}
          >
            <h1 className="contact-h1 col-12  ps-5 mb-0 border-red-l-2">
              Contacto
            </h1>{" "}
            <div className="row px-0">
              <p className="icons-contact col-12 col-sm-12 col-md-2	col-lg-1	col-xl-1	col-xxl-1">
                {" "}
                <SlLocationPin />
              </p>
              <a
                href="#"
                onClick={handleMapLinkClick}
                className="mx-auto contact-adress adress-link my-auto  col-12 col-sm-12 col-md-9	col-lg-10	col-xl-10	col-xxl-10"
              >
                {" "}
                {store.direccion}{" "}
              </a>
            </div>
            <div className="row">
              <p className="icons-contact col-12 col-sm-12 col-md-2	col-lg-1	col-xl-1	col-xxl-1">
                {" "}
                <BsTelephoneOutbound />
              </p>
              <h2 className="mx-auto contact-adress my-auto  col-12 col-sm-12 col-md-9	col-lg-10	col-xl-10	col-xxl-10">
                {" "}
                +34 {store.telefono}
              </h2>
            </div>
            <div className=" row pb-5 mb-5 final-row-margins">
              <p className="icons-contact col-12 col-sm-12 col-md-2	col-lg-1	col-xl-1	col-xxl-1">
                {" "}
                <GoMail />
              </p>
              <h2 className="mx-auto contact-adress my-auto  col-12 col-sm-12 col-md-9	col-lg-10	col-xl-10	col-xxl-10">
                {" "}
                moises@garage.com{" "}
              </h2>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="col-9 col-sm-9 col-md-12	col-lg-12	col-xl-12	col-xxl-12 d-flex flex-column margin-top-section4"
          style={backgroundllave13}
        >
          <h2></h2>
          <p c>© garagellave13.com 2023. Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};
