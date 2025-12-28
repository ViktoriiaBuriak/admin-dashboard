import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className="text-center py-6 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} AdminDashboard. {t('footer.rights')}.
    </footer>
  );
};

export default Footer;
