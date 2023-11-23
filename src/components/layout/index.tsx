import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "./header";
import Nav from "./nav";
import { Outlet } from "react-router-dom";

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Nav handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          position: "absolute",
          // width: { sm: `calc(100% - ${70}px)` },
          ml: { sm: `${70}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
