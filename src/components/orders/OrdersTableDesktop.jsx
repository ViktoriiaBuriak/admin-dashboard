import React from "react";
import { useTranslation } from "react-i18next";
import StatusBadge from "../ui/StatusBadge";

const OrdersTableDesktop = ({ orders }) => {
  const { t } = useTranslation();
  return (
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left">{t("common.table.id")}</th>
            <th className="px-4 py-3 text-left">
              {t("common.table.customer")}
            </th>
            <th className="px-4 py-3 text-left">{t("common.table.date")}</th>
            <th className="px-4 py-3 text-left">{t("common.table.amount")}</th>
            <th className="px-4 py-3 text-left">{t("common.table.status")}</th>
            <th className="px-4 py-3 text-right">{t("common.table.action")}</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
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
                  {t("common.details")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTableDesktop;
