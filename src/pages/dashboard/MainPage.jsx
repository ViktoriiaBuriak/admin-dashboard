import React from "react";
import Card from "../../components/ui/Card";
import OrdersChart from "../../components/ui/OrdersChart";
import { ordersChartData } from "../../data/ordersChartData";
import OrdersTable from "../../components/orders/OrdersTable";
import { ordersTableData } from "../../data/ordersTableData";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t("main_page.title")}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {t("main_page.description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card title={t("stats.users")} value="1,245" />
        <Card title={t("stats.orders")} value="320" />
        <Card title={t("stats.revenue")} value="$12,400" />
        <Card title={t("stats.growth")} value="+12%" />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="font-medium mb-4">{t("main_page.chart_title")}</h2>
        <OrdersChart data={ordersChartData} />
      </div>
      <OrdersTable
        title={t("main_page.recent_orders")}
        orders={ordersTableData}
        limit={5}
      />
    </div>
  );
};

export default MainPage;
