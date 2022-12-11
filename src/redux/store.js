import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import categoriesSlice from "./slices/categoriesSlice";
import productIdSlice from "./slices/productIdSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
   reducer: {
      products: productsSlice,
      category: categoriesSlice,
      byId: productIdSlice,
      cart: cartSlice,
   },
});

export default store;
