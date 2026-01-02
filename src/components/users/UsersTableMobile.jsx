import React from "react";
import { useTranslation } from "react-i18next";
import StatusBadge from "../ui/StatusBadge";

const UsersTableMobile = ({ users }) => {
  const { t } = useTranslation();
  return (
    <div className="lg:hidden divide-y divide-gray-200 dark:divide-gray-700">
      {users.map((user) => (
        <div
          key={user.id}
          className="p-4 space-y-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition"
        >
          <div className="flex justify-between items-center">
            <div className="font-medium text-sm">{user.name}</div>
            <StatusBadge status={user.status}/>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 break-all">
            {user.email}
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{t(`status.${user.role}`)}</span>
            <span>{user.registeredAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersTableMobile;
