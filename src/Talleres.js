import React, { useState, useEffect } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Talleres = () => {
  const [taller, setTaller] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(taller);
  useEffect(() => {
    const lastIndex = taller.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, taller]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="slider" id="talleres">
      <div style={{ width: "90%", margin: 0 }}>
        <h2 style={{ color: "blueviolet", fontSize: "2rem" }}>Talleres</h2>
        <p style={{ color: "grey", fontSize: "1rem" }}>
          Actividades de formación teórico prácticas de distintas especialidades
          con fines específicos para una mejor calidad de vida laboral a nivel
          integral. Formato online y presencial, duración 40 min. Dictado por
          profesionales de la salud.
        </p>
      </div>
      <div className="card-section">
        {taller.map((actividad, actividadIndex) => {
          const { id, title, text, image } = actividad;
          let position = "nextSlide";
          if (actividadIndex === index) {
            position = "activeSlide";
          }
          if (
            actividadIndex === index - 1 ||
            (index === 0 && actividadIndex === taller.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="div-img-taller">
                <img src={image} alt={title}></img>
              </div>
              <div className="div-taller">
                <h4
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h4>
                <p style={{ color: "black", fontSize: "1rem" }}>{text}</p>
              </div>
            </article>
          );
        })}
        <button
          type="button"
          className="prev"
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  );
};

export default Talleres;
