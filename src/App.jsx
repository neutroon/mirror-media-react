// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Home from "./pages/Home";
// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
// import ReactDOM from "react-dom/client";
import store from "./redux/store";
function App() {
  return (
    <>
      <Navbar />
      <div className="my-24"></div>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
      <Footer />
    </>
  );
  //   <header>
  //   <Navbar />
  // </header>
  // <main>
  //   <Home />
  // </main>
  // <Footer />
}

export default App;
