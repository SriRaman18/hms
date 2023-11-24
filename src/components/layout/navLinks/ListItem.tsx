import React from "react";
import { useNavigate, useLocation } from "react-router";
import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import navConfig from "./NavConfig";

type HeaderProps = {
  handleMouseLeave: () => void;
};

function MainListItems({ handleMouseLeave }: HeaderProps) {
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
              m: "8px 10px 0px 6px",

              ...(location.pathname === nav.path
                ? { background: "#ECF4FF" }
                : { background: null }),
            }}
            onClick={() => {
              navigate(nav.path);
              handleMouseLeave();
            }}
          >
            <ListItemIcon sx={{ color: "black" }}>{nav.icon}</ListItemIcon>
            <ListItemText primary={nav.title} />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
}

export default MainListItems;
