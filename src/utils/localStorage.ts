import type { Product } from "../types/product";

const STORAGE_KEY = "products";

export const loadProductsFromStorage = (): Product[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProductsToStorage = (items: Product[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};
