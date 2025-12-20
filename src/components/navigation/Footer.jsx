import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} AdminDashboard. Всі права захищені.
    </footer>
  );
};

export default Footer;
