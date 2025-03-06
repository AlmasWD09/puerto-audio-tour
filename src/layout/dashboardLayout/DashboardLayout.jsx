import { Layout } from "antd";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import DashboardNavbar from "../../components/dashboard/dashboardNavbar/DashboardNavbar";
import { Outlet } from "react-router-dom";


const { Content } = Layout;

const DashboardLayout = () => {
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <DashboardNavbar />
                <Content style={{ margin: "24px 16px", padding: 24 }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default DashboardLayout