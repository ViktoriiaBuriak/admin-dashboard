import React from "react";

const FormInput = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm">{label}</label>
      <input
        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
