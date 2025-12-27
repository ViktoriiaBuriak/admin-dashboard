import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuth = useSelector((s) => s.auth.isAuthenticated);
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <Link to={isAuth ? "/dashboard" : "/"} className="text-2xl font-bold">
        Admin<span className="text-purple-500">Dashboard</span>
      </Link>
      <div className="flex items-center gap-4">
        <button className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm">
          EN
        </button>
        <button className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm">
          🌙
        </button>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
