import React from "react";

const statusStyles = {
  new: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  processing:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  completed:
    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

const statusLabes = {
  new: "Нове",
  processing: "В обробці",
  completed: "Виконано",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {statusLabes[status]}
    </span>
  );
};

export default StatusBadge;
