import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas/registerSchema";
import FormInput from "../../components/ui/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authThunks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((s) => s.auth.isAuthenticated);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  const {t} = useTranslation();

  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuth, navigate]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 lg:px-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold">{t('register_page.title')}</h1>
        <FormInput
          label={t('register_page.email_label')}
          placeholder={t('register_page.placeholders.email')}
          error={errors.email?.message ? t(errors.email.message) : ""}
          {...register("email")}
        />
        <FormInput
          label={t('register_page.password_label')}
          placeholder={t('register_page.placeholders.password')}
          error={errors.password?.message ? t(errors.password.message) : ""}
          autoComplete="new-password"
          {...register("password")}
        />
        <FormInput
          label={t('register_page.confirm_password_label')}
          placeholder={t('register_page.placeholders.confirm_password')}
          error={errors.confirmPassword?.message ? t(errors.confirmPassword.message) : ""}
          autoComplete="new-password"
          {...register("confirmPassword")}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-violet-500 py-2 text-white hover:bg-violet-600 transition"
        >
          {t('register_page.submit_button')}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
