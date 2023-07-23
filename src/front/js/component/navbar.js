import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/navbar.css";
import logo from "../../img/logoverde2.png";
import { Context } from "../store/appContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [selected, setSelected] = useState(null);
  const isDesktop = window.innerWidth >= 1000;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".navbar-scrolled").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 100%",
        end: "bottom 0%",
        onEnter: () => {
          setIsInView(true); // Establecer el estado en true cuando se cumple la condición
        },
        onLeave: () => {
          setIsInView(false); // Establecer el estado en false cuando no se cumple la condición
        },
        onEnterBack: () => {
          setIsInView(true);
        },
        onLeaveBack: () => {
          setIsInView(false);
        },
      });
    });
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/test") {
      setSelected(0);
    } else if (currentPath === "/bestroutes") {
      setSelected(1);
    } else if (currentPath === "/bestphotographers") {
      setSelected(2);
    } else if (currentPath === "/") {
      setSelected(3);
    } else if (currentPath === "/user") {
      setSelected(4);
    } else if (currentPath === "/login") {
      setSelected(5);
    } else if (currentPath === "/events") {
      setSelected(6);
    } else {
      setSelected(null);
    }
  }, []);

  return (
    <div className=" ">
      <nav
        className={`navbar mynav navbar-expand-lg mx-auto navbar-scrolled col-12  ${
          isInView ? " bg-gradient-1 py-5" : " bg-white-gradient shadowed "
        }`}
      >
        <div className="container-fluid  col-11 ">
          <Link
            to="/"
            className={`container-logo-navbar mx-auto${
              isDesktop ? " ms-5" : " ms-2"
            } ${isInView ? " hided" : ""}`}
            onClick={() => setSelected(3)}
          >
            <img src={logo} style={{ width: "8vw", height: "5vh" }} />
          </Link>
          <div></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className={`navbar-nav ms-auto ${isInView ? " " : " "}`}>
              <div className="nav-item ">
                <Link
                  to="/test"
                  className={`nav-link mx-2 me-5 px-2 line center-text ${
                    selected === 0 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => setSelected(0)}
                >
                  CITA PREVIA
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/events"
                  className={`nav-link  mx-2 me-5 line  px-2 ${
                    selected === 6 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => setSelected(6)}
                >
                  BLOG
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/bestroutes"
                  className={`nav-link mx-2 me-5 px-2 line  ${
                    selected === 1 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => setSelected(1)}
                >
                  VEHICULOS OCASIÓN
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/bestphotographers"
                  className={`nav-link  mx-2 me-5 px-2 line ${
                    selected === 2 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => setSelected(2)}
                >
                  CONTACTO
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
