// import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageTransition from "./PageTransition";
import PartnerDetails from "../pages/PartnerDetails";

// function delayImport(importPromise, delayTime = 1000000) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(importPromise);
//     }, delayTime);
//   });
// }

// import Home from "../pages/Home";
const Home = lazy(() => import("../pages/Home"));
// const Home = lazy(() => delayImport(import("../pages/Home")));
// import About from "../pages/About";
const About = lazy(() => import("../pages/About"));
// const About = lazy(() => delayImport(import("../pages/About")));
// import Contact from "../pages/Contact";
const Contact = lazy(() => import("../pages/Contact"));
// const Contact = lazy(() => delayImport(import("../pages/Contact")));
// import Services from "../pages/Services";
const Services = lazy(() => import("../pages/Services"));
// const Services = lazy(() => delayImport(import("../pages/Services")));
// import OurPartners from "../pages/OurPartners";
const OurPartners = lazy(() => import("../pages/OurPartners"));
// const OurPartners = lazy(() => delayImport(import("../pages/OurPartners")));
// import Blog from "../pages/Blog";
const Blog = lazy(() => import("../pages/Blog"));
// const Blog = lazy(() => delayImport(import("../pages/Blog")));
const AppRoutes = () => {
  const location = useLocation();
  return (
    <Suspense
      fallback={
        <div className="fixed bg-primary z-10 flex justify-center items-center h-screen top-0 start-0 end-0 text-center text-white text-6xl font-bold">
          Loading...
        </div>
      }
    >
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/partners/:Id" element={<PartnerDetails />} />
        </Routes>
      </PageTransition>
    </Suspense>
  );
};

export default AppRoutes;
