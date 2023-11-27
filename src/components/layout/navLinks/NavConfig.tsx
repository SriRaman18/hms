import { DashBoard, AppointMents, Patients } from "../../../assets";

const navConfig = [
  {
    title: "Dashboard",
    path: "/",
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
];

export default navConfig;
