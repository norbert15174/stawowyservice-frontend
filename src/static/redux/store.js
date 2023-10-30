import { configureStore } from "@reduxjs/toolkit";
import realizationSlice from "./realizationSlice";
import productSlice from "./productsSlice";
import samplerSlice from "./samplerSlice";

export default configureStore({
  reducer: {
    realization: realizationSlice,
    products: productSlice,
    samplers: samplerSlice
  },
});