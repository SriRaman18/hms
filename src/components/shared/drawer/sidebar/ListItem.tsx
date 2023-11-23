import React from "react";
import { useNavigate } from "react-router";
import { ListItemButton, ListItemText, useTheme } from "@mui/material";
import navConfig from "./NavConfig";
import { ListItemIcon } from "@mui/material";

function MainListItems() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {navConfig.map((nav, index) => {
        return (
          <ListItemButton
            key={index}
            sx={{
              margin: "5px 20px",
              backgroundColor: "skyBlue",
              borderRadius: "10px",
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
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
