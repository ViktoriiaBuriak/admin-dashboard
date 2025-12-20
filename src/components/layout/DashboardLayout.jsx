import React from "react";
import Sidebar from "../navigation/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../navigation/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
