import React from "react";
import OrdersTable from "../../components/orders/OrdersTable";
import { ordersTableData } from "../../data/ordersTableData";
import { useTranslation } from "react-i18next";

const OrdersPage = () => {
  const {t} = useTranslation()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t('orders_page.title')}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {t('orders_page.description')}
        </p>
      </div>
      <OrdersTable title={t('orders_page.table_title')} orders={ordersTableData} showSearch/>
    </div>
  );
};

export default OrdersPage;
