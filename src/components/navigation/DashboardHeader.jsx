import React from "react";

const DashboardHeader = () => {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <div className="font-semibold text-lg">Dashboard</div>
      <div className="flex items-center gap-4">
        <button className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
          Theme
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
      </div>
    </header>
  );
};

export default DashboardHeader;
