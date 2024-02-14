import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { InicioPage } from "../pages/InicioPage";
import { LaFundacion } from "../pages/LaFundacion";
import { Contacto } from "../pages/Contacto";

export const FundaStohrRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/la-fundacion" element={<LaFundacion />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
