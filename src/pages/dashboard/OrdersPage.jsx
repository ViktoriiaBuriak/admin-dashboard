import React from "react";
import OrdersTable from "../../components/orders/OrdersTable";
import { ordersTableData } from "../../data/ordersTableData";

const OrdersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Замовлення</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Повний список замовлень користувачів
        </p>
      </div>
      <OrdersTable title="Всі замовлення" orders={ordersTableData} showSearch/>
    </div>
  );
};

export default OrdersPage;
