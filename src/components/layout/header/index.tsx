import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import NotificationIcon from "../../basic/notificationIcon";
import BadgeAvatars from "../../basic/Avatar";

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
        backgroundColor: "hmsDrawer.dark",
        color: "secondary.main",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
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
          <BadgeAvatars />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
