import { Container, Grid, Toolbar } from "@mui/material";
import { Navbar } from "../components";
import { OnHoverDrawer } from "../components/OnHoverDrawer";

export const FundaStohrLayout = ({ children }) => {
  return (
    <Grid sx={{ display: "flex" }}>
      <Navbar />
      <OnHoverDrawer />

      <Container component="main" sx={{ pt: 3 }}>
        <Toolbar />
        {children}
      </Container>
    </Grid>
  );
};
