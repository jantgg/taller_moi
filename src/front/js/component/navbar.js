import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [scrollDirection, setScrollDirection] = useState("up"); // Estado para almacenar la dirección del scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Estado para almacenar la posición anterior del scroll

  const handleScroll = () => {
    const currentScrollPos =
      window.scrollY || document.documentElement.scrollTop;
    setScrollDirection(currentScrollPos > prevScrollPos ? "down" : "up");
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // Agregar un event listener para el evento de scroll al elemento window
    window.addEventListener("scroll", handleScroll);

    // Eliminar el event listener cuando se desmonte el componente para evitar pérdidas de memoria
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath !== "/") {
      setIsInView(false);
    }
    console.log(store.citas);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      // Verificar si currentPath no es "/"
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
    }
  }, []);

  return (
    <div className="">
      <nav
        style={{ zIndex: "99" }}
        className={`navbar mynav navbar-expand-lg  navbar-scrolled   ${
          isInView
            ? " bg-gradient-1 py-5 col-12"
            : " bg-white-gradient shadowed mt-3 mynav2"
        }
        ${scrollDirection === "down" ? "hided" : ""}
        `}
      >
        <div className={`container-fluid  ${isInView ? "col-11" : "col-12"}`}>
          <Link
            to="/"
            className={`container-logo-navbar mx-auto${
              isDesktop ? " ms-5" : " ms-2"
            } ${isInView ? " hided" : ""}`}
            onClick={() => {
              scrollToTop();
            }}
          >
            <img src={logo} className="size-logo-nav" />
          </Link>
          <div></div>
          <button
            className={`navbar-toggler toggle-color ${
              isInView ? " toggle-color-white" : " toggle-color-black"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div className=" collapse navbar-collapse " id="navbarNavDropdown">
            <ul className={`navbar-nav ms-auto ${isInView ? " " : " "}`}>
              <div className="nav-item ">
                <a
                  href={`http://${store.citas}`}
                  target="_blank"
                  className={`nav-link mx-2 me-5 px-2 line  ${
                    selected === 0 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => {}}
                >
                  CITA PREVIA
                </a>
              </div>
              {/* <div className="nav-item">
                  <Link
                    to="/vehiculos"
                    className={`nav-link  mx-2 me-5 line  px-2 ${
                      selected === 6 && ""
                    } ${isInView ? " text-white" : "  text-black"}`}
                    onClick={() => {}}
                  >
                    BLOG
                  </Link>
                </div> */}
              <div className="nav-item">
                <Link
                  to="/vehiculos"
                  className={`nav-link mx-2 me-5 px-2 line  ${
                    selected === 1 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => {}}
                >
                  MOTOS DE OCASIÓN
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  to="/"
                  className={`nav-link  mx-2 me-5 px-2 line ${
                    selected === 2 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => scrollToBottom()}
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
