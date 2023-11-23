import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const NotificationIcon = () => {
  return (
    <IconButton>
      <Badge
        color="error"
        variant="dot"
        badgeContent={10}
        style={{ transform: "translate(17px, -2px)" }}
      ></Badge>
      <NotificationsOutlinedIcon color="primary" />
    </IconButton>
  )
}

export default NotificationIcon
