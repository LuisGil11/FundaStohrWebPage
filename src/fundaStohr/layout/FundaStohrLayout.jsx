import { Box, Container, Toolbar } from "@mui/material";
import { Navbar } from "../components";
import { OnHoverDrawer } from "../components/OnHoverDrawer";

export const FundaStohrLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <OnHoverDrawer />

      <Container component="main" sx={{ pt: 3 }}>
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
};
