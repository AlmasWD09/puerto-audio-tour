import { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const { Sider } = Layout;



const Sidebar = () => {
    const navigate = useNavigate(); // route change for
    const location = useLocation(); // route change for

    return (
        <Sider
            trigger={null}
            collapsible
            style={{
                height: "100vh",
                position: "fixed", 
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="demo-logo-vertical" />
            <div className="bg-red-600 w-24 h-24 mx-auto rounded-full flex justify-center items-center">
                <h1 className="text-xl text-white text-center">img</h1>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[location.pathname]}
                onClick={({ key }) => navigate(key)}
                items={[
                    { key: "/admin/dashboard", icon: <UserOutlined />, label: "Dashboard" },
                    { key: "/admin/dashboard/users", icon: <VideoCameraOutlined />, label: "Users" },
                    { key: "/admin/dashboard/categories", icon: <UploadOutlined />, label: "Categories" },
                ]}
            />
          
        </Sider>
    )
}

export default Sidebar