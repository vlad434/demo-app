import type { Product } from "../types/product";

const STORAGE_KEY = "products";

export const loadProductsFromStorage = (): Product[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load products from localStorage:", error);
    return [];
  }
};

export const saveProductsToStorage = (items: Product[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save products to localStorage:", error);
  }
};
