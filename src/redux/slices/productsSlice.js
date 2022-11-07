import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Constants
const URL_API = "https://fakestoreapi.com/products";

export const getProducts = createAsyncThunk(
   "productsSlice/getProducts",
   async () => {
      const response = await fetch(URL_API);
      const data = await response.json();
      return data;
   }
);
const productsSlice = createSlice({
   initialState: [],
   name: "productsSlice",
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getProducts.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
