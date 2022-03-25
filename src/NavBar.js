import React from "react";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
const NavBar = () => {
  return (
    <header className="navBar">
      <nav className="items">
        <div>
          <a href="home" className="logoLink">
            <img
              className="logo"
              src="https://vykpausasactivas.com/assets/logo.png"
              alt="V&K"
            ></img>
          </a>
        </div>
        <div className="articulos">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="nosotros"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Nosostros
              </Link>{" "}
            </li>
            <li>
              <Link
                activeClass="active"
                to="pausasActivas"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Pausas Activas
              </Link>{" "}
            </li>
            <li>
              <Link
                activeClass="active"
                to="talleres"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Talleres
              </Link>
              <li>
                <Link
                  activeClass="active"
                  to="mail"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Contactanos
                </Link>
              </li>
            </li>
          </ul>
        </div>
        <div>
          <i>
            <AiOutlineWhatsApp />

            <AiFillLinkedin />
          </i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
