import React, { useState } from "react";

const UsersTable = ({ users }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="font-medium">Всі користувачі</h2>
        <input
          type="text"
          placeholder="Пошук користувача..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm dark:bg-gray-900 dark:border-gray-600"
        />
      </div>
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left">Ім'я</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Роль</th>
            <th className="px-4 py-3 text-left">Статус</th>
            <th className="px-4 py-3 text-left">Дата реєстрації</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-t dark:border-gray-700">
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                {user.email}
              </td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded text-sx font-medium ${
                    user.status === "Активний"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-3">{user.registeredAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
