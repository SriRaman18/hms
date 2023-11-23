import BadgeIcon from "@mui/icons-material/Badge";
import TaskIcon from "@mui/icons-material/Task";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ThreePIcon from "@mui/icons-material/ThreeP";
import { DashBoard, AppointMents, Patients } from "../../../assets";

const navConfig = [
  {
    title: "DashBoard",
    path: "/dashBoard",
    icon: <DashBoard />,
  },
  {
    title: "Appointments",
    path: "/appointMents",
    icon: <AppointMents />,
  },
  {
    title: "Patients",
    path: "/patients",
    icon: <Patients />,
  },
  // {
  //   title: "Report One",
  //   path: "/report-one",
  //   icon: <SummarizeIcon />,
  // },
  // {
  //   title: "Report Two",
  //   path: "/report-two",
  //   icon: <AssessmentIcon />,
  // },
  // {
  //   title: "Report three",
  //   path: "/report-three",
  //   icon: <ThreePIcon />,
  // },
];

export default navConfig;
