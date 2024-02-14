import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  InicioPage,
  LaFundacion,
  Contacto,
  Concursos,
  Exposiciones,
  DibujandoEnArmonia,
  Apoyanos,
} from "../pages/";

export const FundaStohrRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/la-fundacion" element={<LaFundacion />} />
      <Route path="/concursos" element={<Concursos />} />
      <Route path="/exposiciones" element={<Exposiciones />} />
      <Route path="/dibujando-en-armonia" element={<DibujandoEnArmonia />} />
      <Route path="/apoyanos" element={<Apoyanos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
