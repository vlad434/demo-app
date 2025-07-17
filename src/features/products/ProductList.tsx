import React from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { removeProduct, clearProducts } from "./productSlice";

//types
import type { Product } from "../../types/product";

//virtualized lists
import {
  FixedSizeList as List,
  type ListChildComponentProps,
} from "react-window";

//others
import { Paper, Typography, Box, Button } from "@mui/material";

export const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();

  //display single product
  const Row = ({ index, style }: ListChildComponentProps) => {
    const product: Product = products[index];

    return (
      <Box style={style} className="px-4 py-2">
        <Paper elevation={2} className="relative p-4">
          <Button
            variant="text"
            color="error"
            size="small"
            onClick={() => dispatch(removeProduct(product.id))}
            className="!absolute top-2 right-2 !min-w-[0]"
          >
            X
          </Button>

          <Typography variant="h6">Name: {product.name}</Typography>
          <Typography variant="body1">Price: {product.price} RON</Typography>

          {product.description && (
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          )}
        </Paper>
      </Box>
    );
  };

  //if there are no products...
  if (products.length === 0) {
    return (
      <Typography variant="body1">Currently, there are no products.</Typography>
    );
  }

  //display all products
  return (
    <>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(clearProducts())}
        >
          Clear List
        </Button>
      </Box>

      <List
        height={400}
        itemCount={products.length}
        itemSize={120}
        width="100%"
      >
        {Row}
      </List>
    </>
  );
};
