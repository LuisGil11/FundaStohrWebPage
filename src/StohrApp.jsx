import React from "react";
import { AppRouter } from "./router/AppRouter";
import { FundaStohrLayout } from "./fundaStohr/layout/FundaStohrLayout";
import { AppTheme } from "./theme/AppTheme";

export const StohrApp = () => {
  return (
    <AppTheme>
      <FundaStohrLayout>
        <AppRouter />
      </FundaStohrLayout>
    </AppTheme>
  );
};
