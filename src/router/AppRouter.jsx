import React from "react";
import { Route, Routes } from "react-router-dom";
import { FundaStohrRouter } from "./FundaStohrRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<FundaStohrRouter />} />
    </Routes>
  );
};
