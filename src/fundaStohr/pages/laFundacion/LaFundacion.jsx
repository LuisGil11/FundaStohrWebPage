import { Box, Button, Container } from "@mui/material";
import { blue } from "@mui/material/colors";
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
