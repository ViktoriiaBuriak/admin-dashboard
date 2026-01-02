import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import OrdersTableDesktop from "./OrdersTableDesktop";
import OrdersTableMobile from "./OrdersTableMobile";

const OrdersTable = ({ title, orders, limit, showSearch = false }) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");

  const filteredOrders = orders
    .filter((order) =>
      order.customer.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, limit ?? orders.length);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="font-medium">{title || t("orders_page.title")}</h2>
        {showSearch && (
          <input
            type="text"
            placeholder={t("common.search_placeholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-3 py-1 text-sm dark:bg-gray-900 dark:border-gray-600"
          />
        )}
      </div>
      <OrdersTableDesktop orders={filteredOrders} />
      <OrdersTableMobile orders={filteredOrders}/>
    </div>
  );
};

export default OrdersTable;
