import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../components";

const drawerWidth = 240;

export const FundaStohrLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
