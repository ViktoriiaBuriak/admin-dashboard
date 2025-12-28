import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { logout } from "../../features/authSlice";
import ThemeLanguageSwitcher from "../ui/ThemeLanguageSwitcher";

const MobileMenu = ({ isOpen, onClose, isLoggedIn }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      <aside className="fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-gray-800 p-6 flex flex-col gap-4 lg:hidden">
        <button onClick={onClose} className="self-end mb-4">
          <X size={28} />
        </button>

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition text-center"
            >
              {t("auth.login")}
            </Link>
            <Link
              to="/register"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white transition text-center"
            >
              {t("auth.register")}
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-400" />
            <button
              onClick={() => {
                dispatch(logout());
                onClose();
              }}
              className="text-sm text-red-500 hover:text-red-600 transition"
            >
              {t("auth.logout")}
            </button>
          </div>
        )}

        <div className="mt-auto">
          <ThemeLanguageSwitcher />
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;





