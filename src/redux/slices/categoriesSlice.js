import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getByCategory = createAsyncThunk(
   "categoriesSlice/getByCategory",
   async (category) => {
      let URL_API = `https://fakestoreapi.com/products/category/${category.toLowerCase()}`;
      if (category == "All") URL_API = "https://fakestoreapi.com/products";
      const response = await fetch(URL_API);
      const data = await response.json();
      return data;
   }
);
const categoriesSlice = createSlice({
   initialState: [],
   name: "categoriesSlice",
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getByCategory.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
