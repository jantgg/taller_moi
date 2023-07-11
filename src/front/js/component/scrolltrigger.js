import React, { useEffect, useContext } from "react";

const ScrollTrigger = ({ onScrollTrigger }) => {
  useEffect(() => {
    const handleScroll = () => {
      // Calcula la posición del scroll relativa al tamaño de la página
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        (scrollPosition / (pageHeight - windowHeight)) * 100;

      // Verifica si el scroll alcanza el 90%
      if (scrollPercentage >= 90) {
        // Ejecuta la función proporcionada cuando se cumple el scroll trigger
        onScrollTrigger();
      }
    };

    // Agrega el event listener al objeto window
    window.addEventListener("scroll", handleScroll);

    // Elimina el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollTrigger]);

  return null;
};

export default ScrollTrigger;
