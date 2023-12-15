import "./App.css";
import React, { useEffect, useState } from "react";
import Listing from "./components/Listing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ListingDetail from "./components/ListingDetail";

const App = () => {
  return (
    <>
      <NavBar />
      <Footer />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/listing/:hotelId" element={<ListingDetail />} />
      </Routes>
    </>
  );
};

export default App;
