import "./App.css";
import React, { useEffect, useState } from "react";
import Listing from "./components/Listing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Rentals from "./assets/rentals.json";
import Sidebar from "./components/Sidebar";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ListingDetail from "./components/ListingDetail";
import AddHotel from "./pages/AddHotel";

const App = () => {
  const [items, setItems] = useState(Rentals.results);

  return (
    <>
      <NavBar />
      <Footer />
      {/* <Sidebar /> */}
      <Routes>
        <Route
          path="/"
          element={<Listing items={items} setItems={setItems} />}
        />
        <Route path="/listing/:hotelId" element={<ListingDetail />} />
        <Route
          path="/add"
          element={<AddHotel items={items} setItems={setItems} />}
        />
        <Route path="*" element={"404 Page not found"} />
      </Routes>
    </>
  );
};

export default App;
