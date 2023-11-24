import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const NotificationIcon = () => {
  return (
    <IconButton disableRipple={true} sx={{ mr: 2 }}>
      {/* <Badge
        color="error"
        variant="dot"
        badgeContent={10}
        style={{ transform: "translate(17px, -2px)" }}
      ></Badge>
      <NotificationsOutlinedIcon color="primary" /> */}
      <Badge badgeContent={17} color="error">
        <NotificationsOutlinedIcon sx={{ color: "#207DFF;" }} />
      </Badge>
    </IconButton>
  );
};

export default NotificationIcon;
