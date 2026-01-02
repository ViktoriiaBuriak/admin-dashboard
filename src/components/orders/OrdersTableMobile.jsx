import React from "react";
import { useTranslation } from "react-i18next";
import StatusBadge from "../ui/StatusBadge";

const OrdersTableMobile = ({ orders }) => {
  const { t } = useTranslation();
  return (
    <div className="lg:hidden divide-y divide-gray-200 dark:divide-gray-700">
      {orders.map((order) => (
        <div
          key={order.id}
          className="p-4 space-y-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-sm">{order.id}</span>
            <StatusBadge status={order.status} />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {order.customer}
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              {order.date}
            </span>
            <span className="font-semibold">{order.amount}</span>
          </div>
          <button className="text-purple-600 dark:text-purple-400 text-sm hover:underline">
            {t("common.details")}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrdersTableMobile;
