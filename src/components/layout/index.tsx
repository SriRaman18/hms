import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "./header";
import Nav from "./nav";
import { Outlet } from "react-router-dom";
import { setMobileOpen } from "../../redux/slices/layout";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState, AppDispatch } from "../../redux/store";
interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  // const [mobileOpen, setMobileOpen] = useState(false);
  const mobileOpen = useSelector((state: RootState) => state.layout.mobileOpen);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <Header
      // mobileOpen={mobileOpen}
      />
      <Nav
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        // setMobileOpen={setMobileOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          position: "absolute",
          ml: { sm: `${70}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
