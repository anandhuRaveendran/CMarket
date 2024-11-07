/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import BuyerHome from './pages/buyers/BuyerHome';
import FarmerHome from './pages/farmer/FarmerHome';
import CertiAuthHome from './pages/certiAuth/CertiAuthHome';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer/*" element={<BuyerHome />} />
        <Route path="/farmer/*" element={<FarmerHome />} />
        <Route path="/certiAuth/*" element={<CertiAuthHome />} />

      </Routes>
    </Router>

    </>
  )
}

export default App
