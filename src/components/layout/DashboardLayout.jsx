import React, { useState } from "react";
import Sidebar from "../navigation/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../navigation/Header";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100
        ${isSidebarOpen ? "h-screen overflow-hidden" : ""}
      `} >
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
