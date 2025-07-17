import React from "react";

//redux
import type { AppDispatch } from "@app/store";
import { useDispatch } from "react-redux";
import { addProduct } from "@products/slice/productSlice";

//types
import type { Product } from "@/types/product";

//validation schema
import { productSchema, type ProductFormData } from "@products/schema/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//other
import { Button, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

//components
import { FormInputText } from "@components/FormInputText";

export const ProductForm: React.FC = () => {
  const { handleSubmit, reset, control } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
    },
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
      <FormInputText name="name" label="Name" control={control} />

      <FormInputText
        name="price"
        label="Price"
        control={control}
        type="number"
      />
      <FormInputText
        name="description"
        label="Description"
        control={control}
        multiline
        rows={3}
      />

      <Button type="submit" variant="contained">
        Add Product
      </Button>
    </Box>
  );
};
