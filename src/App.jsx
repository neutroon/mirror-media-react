// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Home from "./pages/Home";
// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
// import ReactDOM from "react-dom/client";

// App.jsx or index.js
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect } from "react";
import { fetchPublicData } from "./redux/partnersSlice";

// Extend LazyLoadImage to always include the global placeholder
LazyLoadImage.defaultProps = {
  ...LazyLoadImage.defaultProps,
  placeholderSrc:
    "https://matrixread.com/wp-content/uploads/2020/10/loading-placeholder.png", // Global placeholder
};
function App() {
  const dispatch = useDispatch();
  const { public_data } = useSelector((state) => state.public_data);
  useEffect(() => {
    dispatch(fetchPublicData());
  }, [dispatch]);

  return (
    <>
      <Navbar logo={public_data[0]?.logo} />
      <div className="my-24"></div>
      <AppRoutes />
      <Footer logo={public_data[0]?.logo} />
    </>
  );
}

export default App;
