import { useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

// import style from "./Navbar.module.css";
import "../../App.css";
import { NavLink, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = ({ logo }) => {
  const location = useLocation();
  useEffect(() => {
    setIsClosed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  const [isClosed, setIsClosed] = useState(true);
  const toggleNavbar = () => setIsClosed(!isClosed);
  useEffect(() => {
    const closeNavbar = () => {
      if (window.innerWidth > 767) {
        setIsClosed(true);
      }
    };
    window.addEventListener("resize", closeNavbar);
    return () => window.removeEventListener("resize", closeNavbar);
  }, []);
  return (
    <nav
      className={`fixed z-50 left-1/2 -translate-x-1/2 bg-white shadow-xl px-5 py-2 transition-all duration-500 container ${
        isClosed ? "h-20 rounded-[90px] top-2" : "h-96 rounded-b-2xl top-0"
      }`}
    >
      <div className="flex justify-between font-bold items-center">
        <div className="w-16 rounded-full overflow-hidden cursor-pointer">
          <LazyLoadImage
            className="w-full scale-[1.65] pe-[2px]"
            src={logo}
            alt="company logo"
            effect="blur"
          />
        </div>
        <ul
          className={`gap-5 md:flex transition-all delay-700 ${
            isClosed
              ? "hidden"
              : "flex absolute bottom-14 left-10 w-full flex-col items-start"
          }`}
        >
          <li className="hover:text-primary transition-colors duration-500 cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-primary transition-colors duration-500 cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-primary transition-colors duration-500 cursor-pointer">
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Services
            </NavLink>
          </li>
          {/* <li className="hover:text-primary transition-colors duration-500 cursor-pointer">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Blog
            </NavLink>
          </li> */}
          <li className="hover:text-primary transition-colors duration-500 cursor-pointer">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li className="hover:text-primary transition-colors duration-500 cursor-pointer">
            <NavLink
              to="/partners"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Our Partners
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-5 items-center">
          <NavLink to="/contact">
            <button className="main-btn">Start Today!</button>
          </NavLink>
          <div
            onClick={toggleNavbar}
            className="md:hidden flex w-8 flex-col gap-1 cursor-pointer"
          >
            <span className="h-1 bg-black "></span>
            <span className="h-1 bg-black "></span>
            <span className="h-1 bg-black "></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
