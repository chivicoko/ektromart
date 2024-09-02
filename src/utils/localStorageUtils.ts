import { Product } from './types';

const PRODUCTS_KEY = 'products';

export const getProductsFromLocalStorage = (): Product[] => {
  if (typeof window !== 'undefined') {
    try {
      const products = localStorage.getItem(PRODUCTS_KEY);
      if (products) {
        // console.log('Loaded products from localStorage:', products);
        return JSON.parse(products);
      }
      return [];
    } catch (error) {
      console.error('Error parsing products from localStorage:', error);
      return [];
    }
  }
  return [];
};

export const saveProductsToLocalStorage = (products: Product[]) => {
  if (typeof window !== 'undefined') {
    try {
      // console.log('Saving products to localStorage:', products);
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    } catch (error) {
      console.error('Error saving products to localStorage:', error);
    }
  }
};
