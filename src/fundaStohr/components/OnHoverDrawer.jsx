import {
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
  keyframes,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer, setClosing } from "../../store/slices/drawerSlice";
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
  const {
    toggle,
    father,
    pages = [],
    closing,
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

  const fadeInFwd = keyframes`
  0% {
    -webkit-transform: translateZ(-80px);
            transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`;
  const fadeOutBck = keyframes`
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-80px);
            transform: translateZ(-80px);
    opacity: 0;
  }
`;

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
            marginLeft: 2,
          }}
        >
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
