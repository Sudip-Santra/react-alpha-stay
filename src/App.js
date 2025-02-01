import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import FindHotels from './FindHotels';
import HotelDetails from './HotelDetails';
import UpdateDetails from './updateDetails';
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/FindHotels" element={<FindHotels/>} />
    <Route path="/HotelDetails" element={<HotelDetails/>} />
    <Route path="/updateDetails" element={<UpdateDetails/>} />
  </Routes>

  </BrowserRouter>;

}

export default App; 
