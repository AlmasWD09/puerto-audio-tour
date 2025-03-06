import { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
const { Sider } = Layout;



const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                    { key: "1", icon: <UserOutlined />, label: "Dashboard" },
                    { key: "2", icon: <VideoCameraOutlined />, label: "Profile" },
                    { key: "3", icon: <UploadOutlined />, label: "Settings" },
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