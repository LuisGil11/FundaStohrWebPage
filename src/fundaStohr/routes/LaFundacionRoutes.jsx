import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AlgunasObras } from "../pages/laFundacion/AlgunasObras";
import { ArteYEstilo } from "../pages/laFundacion/ArteYEstilo";
import { BioCarlosStohr } from "../pages/laFundacion/BioCarlosStohr";
import { LaFundacion } from "../pages/laFundacion/LaFundacion";
import { Libros } from "../pages/laFundacion/Libros";

export const LaFundacionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LaFundacion />} />
      <Route path="/algunas-obras" element={<AlgunasObras />} />
      <Route path="/arte-y-estilo" element={<ArteYEstilo />} />
      <Route path="/bio-carlos-stohr" element={<BioCarlosStohr />} />
      <Route path="/libros" element={<Libros />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
