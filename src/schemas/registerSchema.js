import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email обов'язковий")
      .email("Введіть коректний email"),
    password: z.string().min(6, "Пароль має містити мінімум 6 символів"),
    confirmPassword: z.string().min(6, "Підтвердження пароля обовʼязкове"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Паролі не співпадають",
  });
