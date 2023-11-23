import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AvatarMui from "../../basic/Avatar";
import NotificationIcon from "../../basic/notificationIcon";

type HeaderProps = {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ mobileOpen, setMobileOpen }: HeaderProps) => {
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - 70px)` },
        // ml: { sm: `${70}px` },
        transition: "width 0.4s",
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
          <Box
            sx={{
              fontSize: {
                xs: "20px", // Font size for extra-small screens
                sm: "24px", // Font size for small screens and above
              },
              fontWeight: 500,
            }}
          >
            Book Appointments{" "}
          </Box>
        </Typography>
        <Box sx={{ p: 1, display: "flex" }}>
          <NotificationIcon />
          <AvatarMui />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
