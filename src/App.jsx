import "./App.css";
import React, { useEffect, useState } from "react";
import Listing from "./components/Listing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState(null);

  return (
    <>
      <NavBar />
      <Footer />
      <Sidebar />
      <Listing />
    </>
  );
};

export default App;
