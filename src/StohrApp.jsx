import React from "react";
import { AppRouter } from "./router/AppRouter";
import { FundaStohrLayout } from "./fundaStohr/layout/FundaStohrLayout";

export const StohrApp = () => {
  return (
    <FundaStohrLayout>
      <AppRouter />
    </FundaStohrLayout>
  );
};
