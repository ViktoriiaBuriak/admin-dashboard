import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {message: "auth_errors.required"})
    .email({ message: "auth_errors.invalid_email" }),
  password: z.string().min(6, { message: "auth_errors.min_password" }),
});
