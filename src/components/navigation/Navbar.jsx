import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  return (
    <nav className="flex gap-4">
      {!isLoggedIn ? (
        <>
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
        </>
      ) : (
        <div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-400" />
            <button onClick={() => dispatch(logout())} className="text-sm text-red-500">Вийти</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
