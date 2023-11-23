import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Logo } from "../assets";
import BadgeIcon from "./badgeIcon";
import MenuListComposition from "./avatarWithEmail";
import MainListItems from "../nav/ListItem";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import BadgeAvatars from "./avatar";

const defaultDrawerWidth = 60;
const expandedDrawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerWidth, setDrawerWidth] = React.useState(defaultDrawerWidth);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMouseEnter = () => {
    setDrawerWidth(expandedDrawerWidth);
  };

  const handleMouseLeave = () => {
    setDrawerWidth(defaultDrawerWidth);
  };

  // useEffect(() => {}, [drawerWidth]);

  const drawer = (
    <div>
      <Box
        sx={{
          width: "60px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo />
      </Box>
      {/* <Divider /> */}
      <List>
        <MainListItems />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
          <Box sx={{ p: 1, display: "flex" }}>
            <BadgeIcon />
            <BadgeAvatars />
            {/* <MenuListComposition /> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: expandedDrawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none", // Remove border
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
              borderTopRightRadius: "15px", // Add border radius to top-right corner
              borderBottomRightRadius: "15px", // Add border radius to bottom-right corner
              overflow: "hidden",
              transition: "width 0.2s",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(150% - ${300}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}
