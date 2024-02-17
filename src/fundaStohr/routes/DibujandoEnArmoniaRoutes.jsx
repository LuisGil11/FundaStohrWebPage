import React from "react";
import { DibujandoEnArmonia } from "../pages/dibujandoEnArmonia/DibujandoEnArmonia";
import { Talleres } from "../pages/dibujandoEnArmonia/Talleres";
import { EncuentrosAlAire } from "../pages/dibujandoEnArmonia/EncuentrosAlAire";
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
