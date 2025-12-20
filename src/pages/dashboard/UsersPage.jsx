import React from "react";
import UsersTable from "../../components/users/UsersTable";
import { users } from "../../data/users";

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Користувачі</h1>
      <UsersTable users={users} />
    </div>
  );
};

export default UsersPage;
