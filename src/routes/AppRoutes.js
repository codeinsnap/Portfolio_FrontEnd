import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreativeLanding from "../Screen/Artwork_Page/creativeLanding";
import FlashPage from "../commonComponents/empty";
import Portfolio from "../Screen/PortFolio/PortFolio";


class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlashPage />} />
          <Route path="/landing" element={<Portfolio />} />
          <Route path="/photoshop" element={<CreativeLanding />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
