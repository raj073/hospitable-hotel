import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-basic bg-dark fixed-bottom">
      <footer>
        <div className="social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} className="me-4 text-white"></FaFacebook>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} className="me-4 text-white"></FaTwitter>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} className="me-4 text-white"></FaInstagram>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} className="me-4 text-white"></FaLinkedin>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item text-white">
            <Link to="/addroom">Add Room</Link>
          </li>
          <li className="list-inline-item text-white">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="list-inline-item text-white">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="list-inline-item text-white">
            <Link>Privacy Policy</Link>
          </li>
        </ul>
        <p className="copyright">Hospitable Hotel © 2023 @ Rajani Kanta Das</p>
      </footer>
    </div>
  );
};

export default Footer;
