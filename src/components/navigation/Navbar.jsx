import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { logout } from "../../features/authSlice";
import MobileMenu from "./MobileMenu";
import ThemeLanguageSwitcher from "../ui/ThemeLanguageSwitcher";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="flex items-center gap-4">
      <div className="hidden lg:flex items-center gap-4">
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              {t("auth.login")}
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-xl border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white transition"
            >
              {t("auth.register")}
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-400" />
            <button
              onClick={() => dispatch(logout())}
              className="text-sm text-red-500 hover:text-red-600 transition"
            >
              {t("auth.logout")}
            </button>
          </div>
        )}

        <ThemeLanguageSwitcher />
      </div>
      {!isLoggedIn && (
        <button onClick={openMenu} className="lg:hidden p-2">
          <Menu size={28} />
        </button>
      )}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMenu}
        isLoggedIn={isLoggedIn}
      />
    </nav>
  );
};

export default Navbar;
