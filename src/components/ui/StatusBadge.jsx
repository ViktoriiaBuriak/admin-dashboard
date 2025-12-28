import React from "react";
import { useTranslation } from "react-i18next";

const statusStyles = {
  new: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  processing:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  completed:
    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

const StatusBadge = ({ status }) => {
  const { t } = useTranslation();
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {t(`status.${status}`)}
    </span>
  );
};

export default StatusBadge;
