import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getById = createAsyncThunk(
   "categoriesSlice/getByCategory",
   async (productId) => {
      let URL_API = `https://fakestoreapi.com/products/${productId}`;
      const response = await fetch(URL_API);
      const data = await response.json();
      return data;
   }
);
const productIdSlice = createSlice({
   initialState: {},
   name: "productIdSlice",
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getById.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

export const {} = productIdSlice.actions;
export default productIdSlice.reducer;
