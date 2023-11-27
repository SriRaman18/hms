import React from "react";
import { useNavigate, useLocation } from "react-router";
import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import navConfig from "./NavConfig";
import { setMobileOpen, setAppBarTitle } from "../../../redux/slices/layout";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";

type HeaderProps = {
  handleMouseLeave: () => void;
  // setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MainListItems({ handleMouseLeave }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

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
              // setMobileOpen(false);
              dispatch(setMobileOpen(false));
              dispatch(setAppBarTitle(nav.title));
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
