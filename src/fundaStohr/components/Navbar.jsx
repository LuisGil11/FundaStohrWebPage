import {
  ContactEmergency,
  LogoutOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";

export const Navbar = ({ drawerWith = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            FundaStohrApp
          </Typography>

          <Stack direction={"row"} gap={0.5}>
            {/* <Button variant="p" component="div" to="/la-fundacion">
              La Fundación
            </Button> */}

            <Button variant="p" component="div">
              <Link
                component={RouterLink}
                color="inherit"
                to="/la-fundacion"
                underline="none"
              >
                La Fundación
              </Link>
            </Button>
            <Button variant="p" component="div">
              Concursos
            </Button>
            <Button variant="p" component="div">
              Exposiciones
            </Button>
            <Button variant="p" component="div">
              Dibujando en Armonía
            </Button>
            <Button variant="p" component="div">
              Apóyanos
            </Button>
            <Button variant="p" component="div">
              <Link
                component={RouterLink}
                color="inherit"
                to="/contacto"
                underline="none"
              >
                Contacto
              </Link>
            </Button>
          </Stack>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
