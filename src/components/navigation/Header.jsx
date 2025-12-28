import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Menu } from "lucide-react";

const Header = ({ onMenuClick,isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const isAuth = useSelector((s) => s.auth.isAuthenticated);

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        {isAuth && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <Menu size={24} />
          </button>
        )}
        <Link to={isAuth ? "/dashboard" : "/"} className="text-2xl font-bold">
          Admin<span className="text-purple-500">Dashboard</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
