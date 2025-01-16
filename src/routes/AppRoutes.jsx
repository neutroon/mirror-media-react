// import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Home from "../pages/Home";
const Home = lazy(() => import("../pages/Home"));
// import About from "../pages/About";
const About = lazy(() => import("../pages/About"));
// import Contact from "../pages/Contact";
const Contact = lazy(() => import("../pages/Contact"));
// import Services from "../pages/Services";
const Services = lazy(() => import("../pages/Services"));
// import OurPartners from "../pages/OurPartners";
const OurPartners = lazy(() => import("../pages/OurPartners"));
// import Blog from "../pages/Blog";
const Blog = lazy(() => import("../pages/Blog"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partners" element={<OurPartners />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
