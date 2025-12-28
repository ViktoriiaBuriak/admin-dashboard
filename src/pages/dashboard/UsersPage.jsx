import React from "react";
import UsersTable from "../../components/users/UsersTable";
import { users } from "../../data/users";
import { useTranslation } from "react-i18next";

const UsersPage = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t('users_page.title')}</h1>
      <UsersTable users={users} />
    </div>
  );
};

export default UsersPage;
