import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import CommonDashboard from "../pages/dashboard/commonDashboard/CommonDashboard";
import Users from "../pages/dashboard/users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },

    // dashboard layout
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <CommonDashboard />,
            },
            {
                path: "/admin/dashboard/users",
                element: <Users />,
            },
        ],
    },
]);

export default router;