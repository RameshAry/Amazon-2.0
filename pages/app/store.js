import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
export { store };
