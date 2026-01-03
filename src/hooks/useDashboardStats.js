import { ordersTableData } from "../data/ordersTableData";
import { users } from "../data/users";

export const useDashboardStats = () => {
  const totalUsers = users.length;
  const totalOrders = ordersTableData.length;

  const totalRevenue = ordersTableData.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  const revenueFormatted = `${totalRevenue.toLocaleString("uk-UA")} ₴`;

  return { totalUsers, totalOrders, revenueFormatted };
};
