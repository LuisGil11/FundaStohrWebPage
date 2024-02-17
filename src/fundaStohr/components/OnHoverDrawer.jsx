import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer, setClosing } from "../../store/slices/drawerSlice";
import { NavLink } from "react-router-dom";
import { fadeInFwd, fadeOutBck } from "./animations/drawerAnimations";

export const DrawerItem = ({ page, father, total, index }) => {
  return (
    <ListItem key={page}>
      <Link component={NavLink} to={`/${father}/${page}`} underline="none">
        <Typography>{page}</Typography>
      </Link>
      {index !== total - 1 && <Divider />}
    </ListItem>
  );
};

export const OnHoverDrawer = () => {
  const {
    toggle,
    father,
    pages = [],
    closing,
    title,
  } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  const handleOnMouseLeave = () => {
    dispatch(setClosing(true));
    setTimeout(() => {
      dispatch(closeDrawer());
    }, 500);
  };

  useEffect(() => {
    if (toggle) {
      dispatch(setClosing(false));
    }
  }, [toggle]);

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
          animation: `${!closing ? fadeInFwd : fadeOutBck} 0.5s `,
          visibility: !toggle && "hidden",
          transitionDuration: 0,
        },
      }}
      anchor="top"
      open={toggle}
      transitionDuration={0}
    >
      <div
        onMouseLeave={() => handleOnMouseLeave()}
        onMouseOver={() => dispatch(setClosing(false))}
      >
        <List
          sx={{
            px: 2,
            animation: `${fadeInFwd} 0.5 both`,
          }}
        >
          <Typography variant="h3">{title}</Typography>
          <Divider />
          {pages.map((page, i) => (
            <DrawerItem
              key={page}
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
