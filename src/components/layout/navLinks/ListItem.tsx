import React from "react";
import { useNavigate, useLocation } from "react-router";
import { ListItemButton, ListItemText, useTheme } from "@mui/material";
import navConfig from "./NavConfig";
import { ListItemIcon } from "@mui/material";

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
              mr: "10px",
              ml: "6px",
              mb: "8px",
              ...(location.pathname === nav.path
                ? { background: "#ECF4FF" }
                : { background: null }),
            }}
            onClick={() => {
              navigate(nav.path);
            }}
          >
            <ListItemIcon sx={{ color: "black" }}>{nav.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "15px" }}
              primary={nav.title}
            />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
}

export default MainListItems;
