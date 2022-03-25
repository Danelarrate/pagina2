import React from "react";
import Contactanos from "./Contactanos";
import { Link, animateScroll as scroll } from "react-scroll";
const Home = () => {
  return (
    <section className="firstSection">
      <div id="home" className="home">
        <h1 style={{ margin: "5% auto 0 auto", color: "white" }}>V&K</h1>
        <h1 style={{ margin: "0 auto 0 auto" }}>Bienestar corporativo</h1>
        <p style={{ margin: "5% auto 0 auto", width: "45%" }}>
          Actividades pensadas para el binestar integral de tu empresa. Generá
          las mejores condiciones de trabajo, invertí a largo plazo
        </p>
      </div>
      <div className="randomDiv">
        <Contactanos />
        <button type="button" className="verMas">
          <a href="#nosotros">
            <Link
              activeClass="active"
              to="nosotros"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Ver mas
            </Link>{" "}
          </a>
        </button>
      </div>
    </section>
  );
};

export default Home;
