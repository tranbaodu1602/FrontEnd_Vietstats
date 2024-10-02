import Login from "../pages/Login/Login";
import DashboardPage from "../pages/Dashboard/DashboardPage";

const Route2 = [
  { path: "/", component: Login, layout: null },
  { path: "/dashboard", component: DashboardPage, layout: "1" },
];

export { Route2 };
