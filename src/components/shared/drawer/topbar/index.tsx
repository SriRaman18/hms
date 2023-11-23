import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

type TopBarProps = {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopBar = ({ mobileOpen, setMobileOpen }: TopBarProps) => {
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - 60px)` },
        // width: { sm: "100%" },

        // ml: { sm: `${drawerWidth}px` },
        // ml: { sm: "60px" },

        transition: "width 0.1s",
        backgroundColor: "white", // Set background color to white
        color: "black", // Set text color to black
        boxShadow: "none", // Remove box shadow
        borderBottom: "1px solid #e0e0e0", // Add border
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap component="div">
          <Box sx={{ fontWeight: "bold", m: 1 }}> Book Appointments </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
