import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreativeLanding from "../Screen/Artwork_Page/creativeLanding";
import Landing from "../Screen/lading";

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/photoshop" element={<CreativeLanding />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
