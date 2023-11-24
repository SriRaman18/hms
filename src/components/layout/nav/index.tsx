import React, { useState } from "react";
import MainListItems from "../navLinks/ListItem";
import { Logo } from "../../../assets";
import {
  Typography,
  Box,
  Drawer,
  List,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

type NavProps = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const defaultDrawerWidth = 65;
const expandedDrawerWidth = 240;

const Nav = ({ mobileOpen, handleDrawerToggle }: NavProps) => {
  const [drawerWidth, setDrawerWidth] = useState(70);

  const handleMouseEnter = () => {
    setDrawerWidth(expandedDrawerWidth);
  };

  const handleMouseLeave = () => {
    setDrawerWidth(defaultDrawerWidth);
  };

  const drawer = (
    <div>
      <List
        sx={{
          height: "32px",
          display: "flex",
          m: "8px 30px 0px 15px",
        }}
      >
        <ListItemIcon>
          <Logo />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h1">DR.CARROT</Typography>
        </ListItemText>
      </List>
      <List>
        <Divider
          sx={{
            m: "0px 16px",
          }}
        />
        <MainListItems handleMouseLeave={handleMouseLeave} />
      </List>
    </div>
  );
  return (
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
            transition: "width 0.4s",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Nav;
