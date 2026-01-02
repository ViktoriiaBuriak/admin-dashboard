import React from "react";
import ThemeLanguageSwitcher from "../ui/ThemeLanguageSwitcher";
import { useTranslation } from "react-i18next";

const AppearanceSettings = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
      <h2 className="mb-4 text-lg font-semibold">
        {t("settings.appearance.title")}
      </h2>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {t("settings.appearance.label")}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {t("settings.appearance.description")}
          </p>
        </div>

        <ThemeLanguageSwitcher />
      </div>
    </div>
  );
};

export default AppearanceSettings;
