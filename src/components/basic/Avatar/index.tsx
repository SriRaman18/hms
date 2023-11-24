import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { AvatarIcon } from "../../../assets";

export default function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
      <Avatar sx={{ ml: 9 }} alt="Remy Sharp">
        {/* <AvatarIcon /> */}
      </Avatar>
    </Stack>
  );
}
