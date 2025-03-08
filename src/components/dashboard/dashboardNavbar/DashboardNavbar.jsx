
import { Avatar, Button, Dropdown, Input, message } from "antd";
import { LogOut, Menu as LucideMenu } from "lucide-react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

const { Search } = Input;

const DashboardNavbar = ({ onMenuClick, onSidebarToggle, isSidebarCollapsed }) => {


  const userMenuItems = [
    {
      key: "1",
      icon: <MdDashboard size={16} />,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <LogOut size={16} />,
      label: <span >Logout</span>,
    },
  ];

  return (
    <nav className="border-b border-primary bg-white">
      <div className="flex gap-4 h-16 items-center justify-between px-4">
        {/* Menu Button for small screens */}
        <Button
          type="text"
          icon={<LucideMenu className="h-6 w-6" />}
          className="lg:hidden mr-2"
          onClick={onMenuClick}
        >
          <span className="sr-only">Toggle sidebar</span>
        </Button>

        {/* Sidebar Toggle and Dashboard Title */}
        <div className="flex items-center gap-6">
          <Button
            type="text"
            icon={
              <AiOutlineMenuUnfold
                className={`size-5 ${isSidebarCollapsed ? "" : "rotate-180"}`}
              />
            }
            className="hidden lg:flex !px-2"
            onClick={onSidebarToggle}
            aria-label={
              isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          />

          <Search
            placeholder="Search Anything Here..."
            // onSearch={onSearch}
            className="hidden md:inline-block w-[200px] md:w-[230px] lg:w-[250px]"
          />
        </div>

        {/* Notifications and Profile Section */}
        <div className="flex items-center gap-3">

            <Dropdown
              menu={{ items: userMenuItems }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button type="text" shape="circle">
                {/* <Avatar size={40} src={data?.image} /> */}
                <span className="sr-only">User menu</span>
              </Button>
            </Dropdown>
            <>
              <Button
                type="primary"
                // loading={isUserLogoutLoading}
              >
                {/* {isUserLogoutLoading ? "Logout..." : "Logout"} */}
              </Button>
            </>

        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
