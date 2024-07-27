import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Layout from "./components/Layout";
import SubmitFreeTimePage from "./pages/SubmitFreeTimePage";
import { RxDashboard } from "react-icons/rx";
import { RxTable } from "react-icons/rx";
import { PiHandWaving } from "react-icons/pi";
import { PiHandsPraying } from "react-icons/pi";
import { TbPencil } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import LookUpSchedule from "./pages/LookUpSchedulePage";
import SchedulePage from "./pages/SchedulePage";
import CheckingInPage from "./pages/CheckingInPage";
import LeavePage from "./pages/LeavePage";
import PinchHitPage from "./pages/PinchHitPage";
import LookUpSalarayPage from "./pages/LookUpSalarayPage";
import HomePage from "./pages/HomePage";

export const navItems = [
  {
    id: 1,
    text: "查看班表",
    icon: RxDashboard,
    url: "look-up-schedule",
    element: <LookUpSchedule />,
  },
  {
    id: 2,
    text: "提交班表",
    icon: RxTable,
    url: "submit-free-time",
    element: <SubmitFreeTimePage />,
  },
  {
    id: 3,
    text: "排班",
    icon: TbPencil,
    url: "schedule",
    element: <SchedulePage />,
  },
  {
    id: 4,
    text: "考勤",
    icon: BsPerson,
    url: "checking-in",
    element: <CheckingInPage />,
  },
  {
    id: 5,
    text: "请假",
    icon: PiHandsPraying,
    url: "leave",
    element: <LeavePage />,
  },
  {
    id: 6,
    text: "代班",
    icon: PiHandWaving,
    url: "pinch-hit",
    element: <PinchHitPage />,
  },
  {
    id: 7,
    text: "查看工时",
    icon: IoTimeOutline,
    url: "look-up-salary",
    element: <LookUpSalarayPage />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        // index: true 表示这是一个默认的路由，当匹配到 "/" 的时候就会匹配这一项
        index: true,
        element: <HomePage />,
      },
      ...navItems.map((item) => ({
        path: item.url,
        element: item.element,
      })),
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);

export default router;
