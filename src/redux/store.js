import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import categoriesSlice from "./slices/categoriesSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
   reducer: {
      products: productsSlice,
      category: categoriesSlice,
      cart: cartSlice,
   },
});

export default store;
