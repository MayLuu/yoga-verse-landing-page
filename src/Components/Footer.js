import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          {/* <BsTwitter /> */}
          {/* <SiLinkedin />
          <BsYoutube /> */}
          <a href="https://www.facebook.com/yoga.verse.fpt" target="_blank" ><FaFacebookF /></a>
          <a href="https://www.instagram.com/yoga.verse.fpt/" target="_blank" ><FaInstagram /></a>

        </div>
      </div>
      <div className="footer-section-two">
        {/* <div className="footer-section-columns">
          <span>Hỗ trợ</span>
          <span>Trợ</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div> */}
        <div className="footer-section-columns">
          <span>+ 244-5333-7783</span>
          <span>+ 244-5333-7783</span>

          {/* <span>hello@food.com</span>
          <span>press@food.com</span> */}
          {/* <span>contact@food.com</span> */}
        </div>
        <div className="footer-section-columns">
          <span>FPT Hồ Chí Minh</span>
          <span>yogaverse@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
