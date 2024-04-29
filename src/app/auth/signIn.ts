import { z, ZodType } from "zod"; // Add new import

export const UserSchema: ZodType = z.object({
  email: z.string().email().min(1, { message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(30, { message: "Password is too long" }),
});
