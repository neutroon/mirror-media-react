import { configureStore } from "@reduxjs/toolkit";
import partnersReducer from "./partnersSlice";

const store = configureStore({
  reducer: {
    partners: partnersReducer,
  },
});
export default store;
