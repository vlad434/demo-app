import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import {
  loadProductsFromStorage,
  saveProductsToStorage,
} from "../../utils/localStorage";

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: loadProductsFromStorage(), //load data from localStorage
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //add new product
    addProduct: (state, action) => {
      state.products.push(action.payload);
      saveProductsToStorage(state.products);
    },

    //remove product
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      saveProductsToStorage(state.products);
    },

    //remove all products
    clearProducts: (state) => {
      state.products = [];
      saveProductsToStorage([]);
    },
  },
});

export const { addProduct, removeProduct, clearProducts } =
  productSlice.actions;
export default productSlice.reducer;
