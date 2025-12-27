import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email обов'язковий")
    .email("Введіть коректний email"),
  password: z.string().min(6, "Пароль має містити мінімум 6 символів"),
});
