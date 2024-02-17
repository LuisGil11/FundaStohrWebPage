import { LunchDiningOutlined, MyLocationOutlined } from "@mui/icons-material";
import { Button, List, ListItem, Typography } from "@mui/material";
import React from "react";

export const Concursos = () => {
  return (
    <div>
      <Typography
        variant="h1"
        sx={{ color: "red", ":hover": { color: "green" } }}
      >
        Concursos
      </Typography>

      <List>
        <ListItem>
          <Button
            startIcon={<LunchDiningOutlined />}
            endIcon={<MyLocationOutlined />}
          >
            Hola
          </Button>
        </ListItem>
      </List>

      <Typography
        variant="h2"
        sx={{ color: "blue", ":hover": { color: "red" } }}
      >
        Concursos
      </Typography>
    </div>
  );
};
