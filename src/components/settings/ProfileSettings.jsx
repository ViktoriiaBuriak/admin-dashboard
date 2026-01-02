import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  updateUserAvatar,
  updateUserName,
} from "../../features/authSlice";

const ProfileSettings = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);

  const [name, setName] = useState(user.name);

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(updateUserAvatar(reader.result));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    dispatch(updateUserName(name));
  };
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 space-y-6">
      <h2 className="text-lg font-semibold">{t("settings.profile")}</h2>
      <div className="flex items-center gap-6">
        <div className="h-20 w-20 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden flex items-center justify-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-xl font-medium text-white">
              {user?.name?.[0] || "U"}
            </span>
          )}
        </div>
        <label className="cursor-pointer">
          <span className="text-sm text-violet-600 hover:underline">
            {t("settings.change_avatar")}
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-gray-500">{t("settings.name")}</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm dark:border-gray-700 bg-transparent"
          />
          <button
            onClick={handleSave}
            disabled={name === user?.name}
            className="mt-4 rounded-lg bg-violet-500 px-4 py-2 text-sm text-white
             disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t("settings.save_changes")}
          </button>
        </div>
        <div>
          <label className="text-sm text-gray-500">{t("settings.email")}</label>
          <div className="mt-1 rounded-lg border px-3 py-2 text-sm dark:border-gray-700">
            {user?.email || "admin@example.com"}
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-500">{t("settings.role")}</label>
          <div className="mt-1 rounded-lg border px-3 py-2 text-sm dark:border-gray-700">
            Admin
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        <button
          onClick={() => dispatch(logout())}
          className="px-4 py-2 border border-red-500 text-red-500 rounded-lg
             hover:bg-red-500 hover:text-white transition"
        >
          {t("auth.logout")}
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
