import React from "react";
import Card from "../../components/ui/Card";
import OrdersChart from "../../components/ui/OrdersChart";
import { ordersChartData } from "../../data/ordersChartData";
import OrdersTable from "../../components/orders/OrdersTable";
import { ordersTableData } from "../../data/ordersTableData";

const MainPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Панель керування</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Загальний огляд системи
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card title="Users" value="1,245" />
        <Card title="Orders" value="320" />
        <Card title="Revenue" value="$12,400" />
        <Card title="Growth" value="+12%" />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="font-medium mb-4">Кількість замовлень по місяцях</h2>
        <OrdersChart data={ordersChartData} />
      </div>
      <OrdersTable title="Останні замовлення" orders={ordersTableData} limit={5} />
    </div>
  );
};

export default MainPage;
