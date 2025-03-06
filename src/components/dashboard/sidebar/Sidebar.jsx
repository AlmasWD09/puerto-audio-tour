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
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate(); // route change for
    const location = useLocation(); // route change for

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
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
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: "16px",
                    width: "100%",
                    marginTop: "10px",
                }}
            />
        </Sider>
    )
}

export default Sidebar