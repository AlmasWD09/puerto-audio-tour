import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import CommonDashboard from "../pages/dashboard/commonDashboard/CommonDashboard";
import Users from "../pages/dashboard/users/Users";
import Categories from "../pages/dashboard/categories/Categories";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
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
                index: true,
                element: <CommonDashboard />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "categories",
                element: <Categories />,
            },
        ],
    },
]);

export default router;