

import { Button, Drawer } from "antd";
import { X } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import DashboardNavbar from "../../components/dashboard/dashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar for larger screens */}
      <aside
        className={`hidden lg:flex flex-col border-r border-primary my-transition ${
          sidebarCollapsed ? "w-0" : "w-[250px]"
        } bg-[#5F9C42]`}
      >
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <Sidebar collapsed={sidebarCollapsed} />
        </div>
      </aside>

      {/* Sidebar drawer for mobile using Ant Design Drawer */}
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setSidebarOpen(false)}
        open={sidebarOpen}
        width={270}
        styles={{ padding: 0 }}
      >
        <div className="flex justify-between items-center w-full absolute top-3 -left-4 !z-[1000]">
          <span />
          <Button
            type="primary"
            className="bg-primary hover:!bg-primary/80"
            icon={<X className="h-6 w-6 " />}
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <div className="custom-scrollbar">
          <Sidebar collapsed={false} className={"!p-0 !m-0"} />
        </div>
      </Drawer>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <DashboardNavbar
          onMenuClick={handleMenuClick}
          onSidebarToggle={toggleSidebar}
          isSidebarCollapsed={sidebarCollapsed}
        />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar bg-[#F2F8ED]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
