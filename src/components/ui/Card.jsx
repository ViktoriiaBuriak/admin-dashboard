import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
};

export default Card;
