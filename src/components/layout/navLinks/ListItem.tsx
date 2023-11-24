import React from "react";
import { useNavigate, useLocation } from "react-router";

import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import navConfig from "./NavConfig";

function MainListItems() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <React.Fragment>
      {navConfig.map((nav, index) => {
        return (
          <ListItemButton
            key={index}
            disableRipple={true}
            sx={{
              borderRadius: "10px",
              m: "0 10px 8px 6px",
              // mr: "10px",
              // ml: "6px",
              // mb: "8px",
              ...(location.pathname === nav.path
                ? { background: "#ECF4FF" }
                : { background: null }),
            }}
            onClick={() => {
              navigate(nav.path);
            }}
          >
            <ListItemIcon sx={{ color: "black" }}>{nav.icon}</ListItemIcon>
            <ListItemText primary={nav.title} />
            {/* <Typography variant="h3" noWrap component="div">
              {nav.title}
            </Typography> */}
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
}

export default MainListItems;
