import { Button } from "@mui/material";
import React from "react";

export const LaFundacion = () => {
  return (
    <Button
      sx={{
        alignContent: "center",
        backgroundColor: {
          xs: "red",
          md: "green",
          lg: "blue",
        },
      }}
    >
      CLick
    </Button>
  );
};
