import React from "react";

const MailContact = () => {
  return (
    <div className="sendemail">
      <form id="mail" className="form-section">
        <div>
          <h4 style={{ fontSize: "1.5rem", color: "gray" }}>Contactanos </h4>
          <p style={{ fontSize: "1rem", color: "grey" }}>
            Complete el siguiente formulario para enviarnos un mensaje.
          </p>
        </div>
        <div className="input-format">
          <label id="asunto-label" for="asunto">
            Asunto
          </label>
          <select id="dropdown" name="asunto" className="form-control" required>
            <option value="contactar">contactar</option>
            <option value="taller">taller</option>
            <option value="pausas">pausas</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="input-format">
          <label id="name-label" for="name">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Rosa Melano"
            className="form-control"
            required
          />
        </div>
        <div className="input-format">
          <label id="email-label" for="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="ejemplo@dominio.com"
            name="email"
            required
          />
        </div>
        <div className="input-format">
          <label id="telefono-label" for="telefono">
            Numero Telefonico
          </label>
          <input
            type="telefono"
            id="telefono"
            className="form-control"
            placeholder="+54(11) 1234-5678"
            name="telefono"
            required
          />
        </div>

        <div className="input-format">
          <label>Tu mensaje</label>
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            placeholder="Hola Contanos como podemos ayudarte"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" id="submit" className="submit-button">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default MailContact;
