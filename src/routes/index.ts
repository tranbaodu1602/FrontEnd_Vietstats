import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const Route2 = [
  { path: "/", component: Login, layout: null },
  { path: "/dashboard", component: Dashboard, layout: "1" },
];

export { Route2 };
