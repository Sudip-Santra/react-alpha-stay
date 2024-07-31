import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import FindHotels from './FindHotels';
import FindHotelRooms from './FindHotelRooms';
import UpdateDetails from './updateDetails';
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/FindHotels" element={<FindHotels/>} />
    <Route path="/FindHotelRooms" element={<FindHotelRooms/>} />
    <Route path="/updateDetails" element={<UpdateDetails/>} />
  </Routes>

  </BrowserRouter>;

}

export default App; 
