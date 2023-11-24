import React from "react";
import {IconButton,Typography,Toolbar,AppBar,Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
        backgroundColor: "backgroundPrimary.main",
        color: "textPrimary.main",
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
          sx={{ mr: 0, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h1" noWrap component="div">
          Book Appointments
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
