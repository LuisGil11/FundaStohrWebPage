import React from "react";
import { DibujandoEnArmonia } from "../DibujandoEnArmonia";
import { Talleres } from "../Talleres";
import { EncuentrosAlAire } from "../EncuentrosAlAire";
import { Route, Routes } from "react-router-dom";

export const DibujandoEnArmoniaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DibujandoEnArmonia />} />
      <Route path="/talleres-dibujando-en-armonía" element={<Talleres />} />
      <Route path="/encuentros-al-aire" element={<EncuentrosAlAire />} />
    </Routes>
  );
};
