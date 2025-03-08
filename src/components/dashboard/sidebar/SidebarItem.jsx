import { Button } from "antd";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ items }) => {
  return (
    <div className="flex flex-col gap-3 px-3 md:px-5 lg:px-6">
      {items?.map((item) => {
        return (
          <NavLink key={item.label} to={item.path}>
            {({ isActive }) => (
              <div className="flex gap-3 font-inter">
                <Button
                  type="primary"
                  className={`w-full justify-start ${
                    !isActive
                      ? "bg-[#F2F8ED]/10 text-black"
                      : "bg-white text-primary"
                  }  hover:!text-primary hover:pl-4 pl-2 shadow-none hover:!bg-white my-transition py-5 my-2`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarItems;
