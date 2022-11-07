import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   initialState: [],
   name: "cartSlice",
   reducers: {
      addToCart(state, action) {
         let checkedProduct = state.find((ele) => ele.id === action.payload.id);
         if (checkedProduct) {
            checkedProduct.quantity += 1;
         } else {
            state.push({ ...action.payload, quantity: 1 });
         }
      },
      removeFromCart(state, action) {
         return state.filter((e) => e.id !== action.payload);
      },
      updateQuantity(state, action) {
         let checkedProduct = state.find(
            (ele) => ele.id === action.payload.product.id
         );
         checkedProduct.quantity = action.payload.newValue;
      },
      clear() {
         return [];
      },
   },
});
export const { addToCart, removeFromCart, updateQuantity, clear } =
   cartSlice.actions;
export default cartSlice.reducer;
