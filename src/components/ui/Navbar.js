import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logocadscasdc.png";
export const Navbar = () => {
  return (
      <nav className="Navbar">
          <div className="Navbar__left-content-btn">
              <img src={logo} className="logo" />
              <Link to="/" className="Navbar__btn-left">Home</Link>
              <Link to="/about" className="Navbar__btn-left">Sobre nosotros</Link>
              <Link to="/match" className="Navbar__btn-left">Match bar</Link>
              <Link to="/cerca-de-ti" className="Navbar__btn-left">Cerca de ti</Link>
              <Link to="/contacto" className="Navbar__btn-left">Contacto</Link>
          </div>
          <div className="Navbar__right-content-btn">
              <Link to="/" className="Navbar__btn-registro">Registrate!</Link>
              <Link to="/" className="Navbar__btn-login">Iniciar Sesion</Link>
          </div>
      </nav>
  );
};
