import React, { useState } from "react";
import StatusBadge from "../ui/StatusBadge";

const OrdersTable = ({
  title = "Замовлення",
  orders,
  limit,
  showSearch = false,
}) => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders
    .filter((order) =>
      order.customer.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, limit ?? orders.length);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="font-medium">{title}</h2>
        {showSearch && (
          <input
            type="text"
            placeholder="Пошук за клієнтом..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-3 py-1 text-sm dark:bg-gray-900 dark:border-gray-600"
          />
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Клієнт</th>
              <th className="px-4 py-3 text-left">Дата</th>
              <th className="px-4 py-3 text-left">Сума</th>
              <th className="px-4 py-3 text-left">Статус</th>
              <th className="px-4 py-3 text-right">Дія</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">{order.amount}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-purple-600 dark:text-purple-400 hover:underline">
                    Деталі
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
