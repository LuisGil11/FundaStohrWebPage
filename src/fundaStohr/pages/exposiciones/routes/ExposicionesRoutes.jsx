import React from "react";
import { Exposiciones } from "../Exposiciones";
import { Route, Routes } from "react-router-dom";

export const ExposicionesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Exposiciones />} />
    </Routes>
  );
};
