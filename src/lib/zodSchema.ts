import { boolean, z } from "zod";

export const authSchema = z.object({
  username: z.string().min(2).max(15).optional(),
  email: z.string().min(6).max(55),
  password: z.string().min(6).max(55),
  confirm_password: z.string().min(6).max(55).optional(),
});

export const bHouseSchema = z.object({
  userId: z.string().optional(),
  imgUrl: z.string(),
  title: z.string().min(6).max(55),
  description: z.string().min(6).max(255),
  minPrice: z.string().min(1).max(5),
  maxPrice: z.string().min(1).max(5),
  location: z.string().min(6).max(100),
});

export const roomSchema = z.object({
  listingId: z.string(),
  roomNumber: z.string().min(1).max(5),
  price: z.string().min(2).max(5),
  isAvailable: z.boolean(),
});
