import React, { useState, useContext, useRef } from "react";
import "../../styles/sliderbikes.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

//<SliderM data={bikesResults} groupSize={1} />

const SliderBikes = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + groupSize;
  const dataToRender = data.slice(startIndex, endIndex);
  const [isVisible, setIsVisible] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const containerRef = useRef(null);

  const handleNextClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStartIndex(startIndex + groupSize);
      setTimeout(() => {
        setIsVisible(true);
      }, 5);
    }, 2);
  };

  const handlePrevClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStartIndex(Math.max(startIndex - groupSize, 0));
      setTimeout(() => {
        setIsVisible(true);
      }, 5);
    }, 2);
  };

  return (
    <div className="d-flex flex-column ">
      {dataToRender.map((url, idx) => {
        const index = startIndex + idx; // Crear una variable actualizada para el índice
        return (
          <div className="bordecitoall relative hphotobikes bg-black">
            <div
              key={index}
              className={`hphotobikes col-12 text-white  absolute mx-auto ${
                isVisible ? " show-slider" : " hide-slider"
              }`}
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="col-12 d-flex absolute marggin-btn">
              <button
                className={` boton-i px-0 col-1 ${
                  startIndex === 0 ? " opa0" : " opa1"
                }`}
                onClick={handlePrevClick}
                disabled={startIndex === 0}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="col-10 px-0 text-white center-text"></div>
              <button
                className={` boton-i col-1 px-0 ${
                  endIndex >= data.length ? " opa0" : " opa1"
                }`}
                onClick={handleNextClick}
                disabled={endIndex >= data.length}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SliderBikes;
