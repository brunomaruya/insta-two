import { z, ZodType } from "zod"; // Add new import

export const UserSchema: ZodType = z
  .object({
    name: z.string().min(1, { message: "invalid name" }),
    email: z.string().email().min(1, { message: "invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(30, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });
