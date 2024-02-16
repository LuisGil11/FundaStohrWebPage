import {
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../store/slices/drawerSlice";
import { NavLink } from "react-router-dom";

export const DrawerItem = ({ page, father, total, index }) => {
  return (
    <ListItem key={page}>
      <NavLink to={`/${father}/${page}`}>
        <Typography>{page}</Typography>
      </NavLink>
      {index !== total - 1 && <Divider />}
    </ListItem>
  );
};

export const OnHoverDrawer = () => {
  const { toggle, father, pages = [] } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  console.log(pages);
  console.log(pages[0]);

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
          {pages.map((page, i) => (
            <DrawerItem
              page={page}
              total={pages.length}
              index={i}
              father={father}
            />
          ))}
        </List>
      </div>
    </Drawer>
  );
};
