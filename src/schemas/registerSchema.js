import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, {message: "auth_errors.required"})
      .email({message: "auth_errors.invalid_email"}),
    password: z.string().min(6, { message: "auth_errors.min_password" }),
    confirmPassword: z.string().min(6, { message: "auth_errors.confirm_password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "auth_errors.check_password",
  });
