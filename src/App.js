import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Nosotros from "./Nosotros";
import PausasActivas from "./PausasActivas";
import Talleres from "./Talleres";
import MailContact from "./MailContact";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
function App() {
  return (
    <main className="section">
      <NavBar />
      <div className="whatsapp">
        <i>
          <FaWhatsappSquare />
        </i>
      </div>
      <Home />
      <Nosotros />
      <div className="line"></div>
      <PausasActivas />
      <Talleres />
      <MailContact />
      <footer>
        <div>
          <h1>V&K Fitness</h1>
        </div>
        <div>
          <i>
            <AiOutlineWhatsApp />
            <AiFillLinkedin />
          </i>
        </div>
      </footer>
    </main>
  );
}
export default App;
