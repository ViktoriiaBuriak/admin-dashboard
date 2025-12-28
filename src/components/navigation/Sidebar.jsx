import React from "react";
import { X } from "lucide-react";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <aside className="hidden lg:flex w-64 flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <SidebarContent />
      </aside>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col lg:hidden">
            <div className="p-4 flex justify-end">
              <button onClick={onClose}>
                <X size={24} />
              </button>
            </div>
            <SidebarContent onNavigate={onClose} />
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
