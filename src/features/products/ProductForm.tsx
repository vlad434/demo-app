import React from "react";

//redux
import type { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice";

//types
import type { Product } from "../../types/product";

//validation schema
import { productSchema, type ProductFormData } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//other
import { TextField, Button, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

//components

export const ProductForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: ProductFormData) => {
    const newProduct: Product = {
      id: uuidv4(),
      ...data,
    };
    dispatch(addProduct(newProduct));
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
    >
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Price"
        type="number"
        {...register("price")}
        error={!!errors.price}
        helperText={errors.price?.message}
      />

      <TextField
        label="Description"
        multiline
        rows={3}
        {...register("description")}
      />

      <Button type="submit" variant="contained">
        Add Product
      </Button>
    </Box>
  );
};
