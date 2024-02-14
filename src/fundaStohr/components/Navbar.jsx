import {
  AppBar,
  Button,
  Grid,
  Link,
  Stack,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import React from "react";

export const Navbar = ({ drawerWith = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            component={RouterLink}
            color="inherit"
            to="/inicio"
            underline="none"
          >
            <Typography variant="h6" noWrap component="div">
              FundaStohrApp
            </Typography>
          </Link>

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
                sx={{ "&.active": { borderBottom: 3, borderColor: "white" } }}
              >
                La Fundación
              </Link>
            </Button>
            <Button variant="p" component="div">
              <Link
                component={RouterLink}
                color="inherit"
                to="/concursos"
                underline="none"
                sx={{ "&.active": { borderBottom: 3, borderColor: "white" } }}
              >
                Concursos
              </Link>
            </Button>
            <Button variant="p" component="div">
              <Link
                component={RouterLink}
                color="inherit"
                to="/exposiciones"
                underline="none"
                sx={{ "&.active": { borderBottom: 3, borderColor: "white" } }}
              >
                Exposiciones
              </Link>
            </Button>
            <Button variant="p" component="div">
              <Link
                component={RouterLink}
                color="inherit"
                to="/dibujando-en-armonia"
                underline="none"
                sx={{ "&.active": { borderBottom: 3, borderColor: "white" } }}
              >
                Dibujando en Armonía
              </Link>
            </Button>
            <Button variant="p" component="div">
              <Link
                component={RouterLink}
                color="inherit"
                to="/apoyanos"
                underline="none"
                sx={{ "&.active": { borderBottom: 3, borderColor: "white" } }}
              >
                Apóyanos
              </Link>
            </Button>
            <Button variant="p" component="div">
              <Link
                component={RouterLink}
                color="inherit"
                to="/contacto"
                underline="none"
                sx={{ "&.active": { borderBottom: 3, borderColor: "white" } }}
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
