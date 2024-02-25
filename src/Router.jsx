import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./layouts/App";
import Home from "./screens/Home";
import Mangrove from "./screens/Mangrove";
import Team from "./screens/Team";
import DetailMangrove from "./screens/DetailMangrove";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/mangrove" element={<Mangrove />} />
          <Route path="/mangrove-detail" element={<DetailMangrove />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
