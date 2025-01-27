// import React from "react";
// import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ logo }) => {
  return (
    <footer className="bg-gray-100  text-gray-500">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="mx-1.5 flex-1">
          <div className="rounded-full lg:mx-auto overflow-hidden w-20 h-20 mb-3">
            <img src={logo} alt="" className="scale-150" />
          </div>
          <div>
            <p>
              Empowering businesses with innovative marketing solutions. Let’s
              create something extraordinary together.
            </p>
            <p>
              Your trusted partner for creative marketing and business growth
              strategies.
            </p>
          </div>
        </div>
        <div className="mx-1.5 col-span-2">
          <h4 className="text-black font-bold text-[1.6rem] lg:text-center">
            Services
          </h4>
          <div className="flex flex-col lg:flex-row gap-2 mt-5 text-[.8rem] lg:justify-around">
            <ul className="flex flex-col gap-3">
              {" "}
              <li className="cursor-pointer hover:text-primary">
                SOCIAL MEDIA MANAGEMENT
              </li>
              <li className="cursor-pointer hover:text-primary">
                WEB DESIGN AND DEVELOPMENT
              </li>
              <li className="cursor-pointer hover:text-primary">
                DIGITAL MARKETING
              </li>
              <li className="cursor-pointer hover:text-primary">
                SEARCH ENGINE OPTIMIZATION (SEO)
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer hover:text-primary">
                EVENT ORGANIZING
              </li>
              <li className="cursor-pointer hover:text-primary">
                MEDIA PRODUCTION
              </li>
              <li className="cursor-pointer hover:text-primary">PHOTOGRAPHY</li>
              <li className="cursor-pointer hover:text-primary">
                OUT DOOR MARKETING
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-1.5">
          <h4 className="text-black font-bold text-[1.6rem] lg:text-center">
            Contact Info
          </h4>
          <ul className="p-3 flex flex-col gap-3 text-sm">
            <li>
              <p>
                Al-Mubtadiyan Tower, 3rd floor, Office 33 <br />
                Cairo, Egypt.{" "}
              </p>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-primary"
                href="mailto:support@mirror-media.com"
              >
                support@mirror-media.com
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-primary"
                href="tel:+2010011112222"
              >
                +20 100 1111 2222
              </a>
            </li>
          </ul>
          <ul className="flex gap-3 mt-5 text-[1.5rem]">
            <li>
              <a
                className="hover:text-primary"
                href="https://www.facebook.com/MirrorMedia.M"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href="https://www.instagram.com/mirror_media.m"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href="https://www.linkedin.com/company/mirror-media-tech"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-gray-700 text-sm">
          © 2025 Crafted by{" "}
          <a
            href="https://zhesham.tech"
            className="text-primary hover:underline"
            target="_blank"
          >
            Hesham
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
