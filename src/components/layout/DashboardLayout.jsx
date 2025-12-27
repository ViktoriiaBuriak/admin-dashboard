import React from "react";
import Sidebar from "../navigation/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../navigation/Header";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
