import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import UsersTableDesktop from "./UsersTableDesktop";
import UsersTableMobile from "./UsersTableMobile";

const UsersTable = ({ users }) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="font-medium">{t('users_page.table_title')}</h2>
        <input
          type="text"
          placeholder={t('users_page.search_placeholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm dark:bg-gray-900 dark:border-gray-600"
        />
      </div>
      <UsersTableDesktop users={filteredUsers}/>
      <UsersTableMobile users={filteredUsers}/>
    </div>
  );
};

export default UsersTable;
