import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  // price: z.coerce.number().min(0, "Price has to be min. 1"),
  price: z
    .string()
    .min(1, "Price is required")
    // .refine((val) => !isNaN(Number(val)), "Price must be a number")
    .transform((val) => Number(val))
    .pipe(z.number().min(0, "Price must be at least 0")),
  description: z.string().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
