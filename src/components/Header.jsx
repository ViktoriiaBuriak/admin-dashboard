import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <a href="/" className="text-2xl font-bold">
        Admin<span className="text-purple-500">Dashboard</span>
      </a>
      <nav className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition"
        >
          Увійти
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 rounded-xl border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white transition"
        >
          Реєстрація
        </Link>
      </nav>
    </header>
  );
};

export default Header;
