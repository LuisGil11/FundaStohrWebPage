import { AppBar, Grid, Link, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import React from "react";
import { NavbarElement } from "./NavbarElement";
import { pagesInfo } from "../utilities/pagesInfo";

export const Navbar = () => {
  const navBarHeight = 60;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ height: navBarHeight }}>
          <Grid
            sx={{ height: "100%" }}
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
              <Typography
                variant="h6"
                noWrap
                component="div"
                // sx={{ "&:hover": { color: "red" } }}
              >
                FundaStohrApp
              </Typography>
            </Link>

            <Stack
              direction={"row"}
              gap={0.5}
              sx={{ height: navBarHeight + 1 }}
            >
              {pagesInfo.map((page) => (
                <NavbarElement {...page} key={page.link} />
              ))}
            </Stack>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
