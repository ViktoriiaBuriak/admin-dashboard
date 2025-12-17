import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/loginSchema";
import FormInput from "../components/FormInput";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log("Login data: ", data);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Вхід в систему
        </h1>
        <FormInput
          label="Email"
          error={errors.email?.message}
          {...register("email")}
        />
        <FormInput
          label="Пароль"
          error={errors.password?.message}
          {...register("password")}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-violet-500 py-2 text-white hover:bg-violet-600 transition"
        >
          Увійти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
