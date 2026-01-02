import React from "react";
import { useTranslation } from "react-i18next";
import StatusBadge from "../ui/StatusBadge";

const UsersTableDesktop = ({ users }) => {
  const { t } = useTranslation();
  return (
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left">
              {t("users_page.table.name")}
            </th>
            <th className="px-4 py-3 text-left">
              {t("users_page.table.email")}
            </th>
            <th className="px-4 py-3 text-left">
              {t("users_page.table.role")}
            </th>
            <th className="px-4 py-3 text-left">
              {t("users_page.table.status")}
            </th>
            <th className="px-4 py-3 text-left">
              {t("users_page.table.reg_date")}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t dark:border-gray-700">
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                {user.email}
              </td>
              <td className="px-4 py-3">{t(`status.${user.role}`)}</td>
              <td className="px-4 py-3">
                <StatusBadge status={user.status}/>
              </td>
              <td className="px-4 py-3">{user.registeredAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTableDesktop;
