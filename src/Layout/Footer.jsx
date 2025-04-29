import React from 'react';
import './Footer.css';
// import './Footer.css'; // Importamos los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mi Aplicación React. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/terminos">Términos y Condiciones</a>
          <a href="/privacidad">Política de Privacidad</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;