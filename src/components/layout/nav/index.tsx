import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MainListItems from "../navLinks/ListItem";
import { Logo } from "../../../assets";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
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
          mr: "15px",
          ml: "15px",
          mt: "8px",
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
            // width: "60px",
            mr: 2,
            ml: 2,
          }}
        />
        <MainListItems />
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
