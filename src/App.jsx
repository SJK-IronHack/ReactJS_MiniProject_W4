import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Listing from "./components/Listing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Rentals from "./assets/rentals.json";

import ListingDetail from "./components/ListingDetail";
import AddHotel from "./pages/AddHotel";

import "./styles/app.scss";
import Sidebar from "./components/Sidebar";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [items, setItems] = useState(Rentals.results);
  const [data, setData] = useState(Rentals.results);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Listing items={items} setItems={setItems} />}
        />
        <Route
          path="/listing/:hotelId"
          element={<ListingDetail items={items} setItems={setItems} />}
        />
        <Route
          path="/add"
          element={<AddHotel items={items} setItems={setItems} />}
        />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="*" element={"404 Page not found"} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
