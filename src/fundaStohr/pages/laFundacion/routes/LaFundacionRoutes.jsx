import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AlgunasObras } from "../AlgunasObras";
import { ArteYEstilo } from "../ArteYEstilo";
import { BioCarlosStohr } from "../BioCarlosStohr";
import { LaFundacion } from "../LaFundacion";
import { Libros } from "../Libros";

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
