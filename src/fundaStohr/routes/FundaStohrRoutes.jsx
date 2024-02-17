import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { InicioPage, Contacto, Apoyanos } from "../pages/";
import { LaFundacionRoutes } from "../pages/laFundacion/routes/LaFundacionRoutes";
import { ConcursosRoutes } from "../pages/concursos/routes/ConcursosRoutes";
import { DibujandoEnArmoniaRoutes } from "../pages/dibujandoEnArmonia/routes/DibujandoEnArmoniaRoutes";
import { ExposicionesRoutes } from "../pages/exposiciones/routes/ExposicionesRoutes";

export const FundaStohrRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/la-fundacion/*" element={<LaFundacionRoutes />} />
      <Route path="/concursos/*" element={<ConcursosRoutes />} />
      <Route path="/exposiciones/*" element={<ExposicionesRoutes />} />
      <Route
        path="/dibujando-en-armonia/*"
        element={<DibujandoEnArmoniaRoutes />}
      />
      <Route path="/apoyanos" element={<Apoyanos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
