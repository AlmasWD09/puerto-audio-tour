// import { Layout } from "antd";
// import Sidebar from "../../components/dashboard/sidebar/Sidebar";
// import DashboardNavbar from "../../components/dashboard/dashboardNavbar/DashboardNavbar";
// import { Outlet } from "react-router-dom";
// import './dashboardLayout.css'

// const { Content } = Layout;

// const DashboardLayout = () => {
//     return (
//         <Layout style={{ minHeight: "100vh" }}>
//             {/* sidebar component */}
//             <Sidebar />

//             {/* Main content area */}
//             <Layout
//                 style={{
//                     marginLeft: 200,
//                     display: "flex",
//                     flexDirection: "column",
//                     height: "100vh",
//                 }}
//             >
//                 <DashboardNavbar />
//                 <Content
//                     style={{
//                         flex: 1,
//                         padding: 20,
//                         background: "gray",
//                         overflowY: "auto",
//                     }}
//                 >

//                     <Outlet />
//                 </Content>
//             </Layout>
//         </Layout>
//     )
// }

// export default DashboardLayout



import { Layout } from "antd";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import DashboardNavbar from "../../components/dashboard/dashboardNavbar/DashboardNavbar";
import { Outlet } from "react-router-dom";
import './dashboardLayout.css';

const { Content } = Layout;

const DashboardLayout = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* sidebar component */}
            <Sidebar />

            {/* Main content area */}
            <Layout
                style={{
                    marginLeft: 200,
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                {/* <DashboardNavbar /> */}
                <Content
                    style={{
                        flex: 1,
                        padding: 20,
                        background: "gray",
                        overflowY: "auto",
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
