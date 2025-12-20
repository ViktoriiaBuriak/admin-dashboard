import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6 font-bold text-xl text-gray-900 dark:text-white">Admin Panel</div>
      <nav className="flex flex-col gap-1 px-4">
        <NavLink to="/dashboard" className="sidebar-link">Dashboard</NavLink>
        <NavLink to="/dashboard/orders" className="sidebar-link">Замовлення</NavLink>
        <NavLink to="/dashboard/users" className="sidebar-link">Користувачі</NavLink>
        <NavLink to="/dashboard/profile" className="sidebar-link">Profile</NavLink>
        <NavLink to="/dashboard/settings" className="sidebar-link">Settings</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
