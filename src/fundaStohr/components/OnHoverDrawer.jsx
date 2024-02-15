import {
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";

export const OnHoverDrawer = () => {
  return (
    <>
      <Button>
        <Drawer anchor="top">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <List>
              <ListItemText primary={"Prueba"} />
              <Divider />
              <ListItemText primary={"Prueba"} />
              <ListItemText primary={"Prueba"} />
              <ListItemText primary={"Prueba"} />
            </List>
          </Grid>
        </Drawer>
      </Button>
    </>
  );
};
