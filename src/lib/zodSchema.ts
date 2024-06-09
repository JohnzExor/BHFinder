import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(6).max(15).optional(),
  email: z.string().min(6).max(55),
  password: z.string().min(6).max(55),
});
