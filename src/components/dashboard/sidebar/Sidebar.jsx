
import { Link } from "react-router-dom";
import SidebarItems from "./sidebarItem";
import { menuItems } from "./menuItem-data";
// import whiteLogo from "../../../../public/white-logo.png";


const Sidebar = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="space-y-3 ">
        <div className="py-2">
          <div className="flex justify-start items-center py-4 px-3 md:px-5 lg:px-6">
            <Link
              to="/"
              className="inline-block text-primary font-bold text-xl md:text-2xl uppercase"
            >
              {/* <img className="max-w-[150px]" src={whiteLogo} alt="CropyFy" /> */}
              <h1>Logo</h1>
            </Link>
          </div>
          <SidebarItems items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
