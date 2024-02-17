import React from "react";
import { Concursos } from "../pages/concursos/Concursos";
import { Route, Routes } from "react-router-dom";

export const ConcursosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Concursos />} />
    </Routes>
  );
};
