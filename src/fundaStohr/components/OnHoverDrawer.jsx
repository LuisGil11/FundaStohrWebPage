import {
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../store/slices/drawerSlice";

export const OnHoverDrawer = () => {
  const { toggle } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  return (
    <Drawer
      component="div"
      ModalProps={{
        slots: { backdrop: "div" },
        slotProps: {
          root: {
            style: {
              position: "absolute",
              top: "unset",
              bottom: "unset",
              left: "unset",
              right: "unset",
            },
          },
        },
      }}
      PaperProps={{
        sx: {
          width: "100%",
          marginTop: 8,
          textAlign: "left",
        },
      }}
      anchor="top"
      open={toggle}
    >
      <div onMouseLeave={() => dispatch(closeDrawer())}>
        <List sx={{ marginLeft: 2 }}>
          <ListItemText primary={"Prueba"} />
          <Divider />
          <ListItemText primary={"Prueba"} />
          <ListItemText primary={"Prueba"} />
          <ListItemText primary={"Prueba"} />
        </List>
      </div>
    </Drawer>
  );
};
