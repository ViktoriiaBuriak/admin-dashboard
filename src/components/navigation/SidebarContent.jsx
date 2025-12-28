import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import { NavLink } from 'react-router-dom';
import ThemeLanguageSwitcher from '../ui/ThemeLanguageSwitcher';

const SidebarContent = ({ onNavigate }) => {
 const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-6 font-bold text-xl text-gray-900 dark:text-white">
        {t("sidebar.panel_name")}
      </div>

      <nav className="flex flex-col gap-1 px-4">
        <NavLink to="/dashboard" onClick={onNavigate} className="sidebar-link">
          {t("sidebar.dashboard")}
        </NavLink>
        <NavLink to="/dashboard/orders" onClick={onNavigate} className="sidebar-link">
          {t("sidebar.orders")}
        </NavLink>
        <NavLink to="/dashboard/users" onClick={onNavigate} className="sidebar-link">
          {t("sidebar.users")}
        </NavLink>
        <NavLink to="/dashboard/settings" onClick={onNavigate} className="sidebar-link">
          {t("sidebar.settings")}
        </NavLink>
      </nav>

      <div className="mt-auto p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
        <ThemeLanguageSwitcher className="justify-between" />

        <button
          onClick={() => dispatch(logout())}
          className="w-full py-2 text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition"
        >
          {t("auth.logout")}
        </button>
      </div>
    </>
  );
}

export default SidebarContent
