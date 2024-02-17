import { useDispatch } from "react-redux";
import {
  closeDrawer,
  openDrawer,
  setClosing,
} from "../../store/slices/drawerSlice";
import { Button, Link, Typography } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

export const NavbarElement = ({ pages, link, title }) => {
  const dispatch = useDispatch();

  const handleOnMouseLeave = () => {
    dispatch(setClosing(true));
    setTimeout(() => {
      dispatch(closeDrawer());
    }, 500);
  };

  return (
    <Button
      variant="p"
      component="div"
      onMouseLeave={() => {
        pages && handleOnMouseLeave();
      }}
      onMouseOver={() => {
        pages &&
          dispatch(
            openDrawer({
              pages,
              father: link,
              title,
            })
          );
      }}
      onClick={() => {
        pages && handleOnMouseLeave();
      }}
    >
      <Link
        component={RouterLink}
        to={link}
        underline="none"
        sx={{ "&.active": { borderBottom: 3, borderColor: "white" } }}
      >
        <Typography color="white">{title}</Typography>
      </Link>
    </Button>
  );
};
