import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().min(1, "Price has to be min. 1"),
  description: z.string().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
