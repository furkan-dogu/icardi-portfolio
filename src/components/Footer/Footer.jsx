import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="social-icons">
        <a href="https://twitter.com/MauroIcardi" target="_blank" rel="noreferrer">
        <FaTwitter />
        </a>
        <a href="https://www.facebook.com/MauroIcardiOficial/?locale=tr_TR" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/mauroicardi/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div class="copyright">&copy; Copyright 2023</div>
    </footer>
  );
};

export default Footer;
