import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { AvatarIcon } from "../../../assets";
const AvatarMui = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
      <Avatar sx={{ ml: 9 }} alt="Remy Sharp" src="../../../assets/AvatarIcon">
        {/* <AvatarIcon /> */}
      </Avatar>
    </Stack>
  );
};

export default AvatarMui;
