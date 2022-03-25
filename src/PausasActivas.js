import React from "react";
import pausasData from "./pausasData";
const PausasActivas = () => {
  return (
    <section className="pausasSection" id="pausasActivas">
      <div style={{ width: "90%", marginBottom: "2.5rem" }}>
        <h2 style={{ color: "blueviolet", fontSize: "2rem" }}>
          PAUSAS ACTIVAS
        </h2>
        <p style={{ color: "grey", fontSize: "1rem" }}>
          Las Pausas Activas son breves descansos durante la jornada laboral que
          sirven para recuperar energía, mejorar el desempeño y eficiencia en el
          trabajo, a través de diferentes técnicas y ejercicios que ayudan a
          reducir la fatiga laboral, trastornos osteomusculares y prevenir el
          estrés. Además, son una excelente forma de promover hábitos saludables
          en el trabajo y todas las áreas de la vida cotidiana.
        </p>
      </div>
      <div className="container">
        {pausasData.map((pausas) => {
          const { id, text, title, descripcion, image } = pausas;
          return (
            <a key={id} className="activity-card">
              <div className="mask">
                <img src={image} alt={title}></img>
              </div>

              <div className="pausa-div">
                <p style={{ color: "blueviolet", margin: 0, fontWeight: 500 }}>
                  {descripcion}
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {title}
                </p>
                <p style={{ color: "grey", margin: 0 }}>{text}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default PausasActivas;
