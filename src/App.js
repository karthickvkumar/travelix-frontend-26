import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import DestinationScreen from "./screens/destinations";
import HotelScreen from "./screens/hotels";
import ContactScreen from "./screens/contact";
import PageNotFoundScreen from "./screens/page-not-found";

import "./css/flaticon.css";
import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
        <Route path="hotels" element={<HotelScreen></HotelScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>

        <Route path="*" element={<PageNotFoundScreen></PageNotFoundScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;