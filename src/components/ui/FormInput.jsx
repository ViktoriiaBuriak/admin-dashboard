import React from "react";

const FormInput = ({ label, error, placeholder, ...props }) => {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border px-3 py-2
          bg-white dark:bg-gray-900
          text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-violet-400
          transition"
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
