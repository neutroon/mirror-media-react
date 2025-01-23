import { configureStore } from "@reduxjs/toolkit";
import partnersReducer from "./dataSlice";

// const data = createSlice({
//   name: "data",
//   initialState: {
//     numbers: dataReducer,
//   },
//   middleware: [thunk],
// });

const store = configureStore({
  reducer: {
    data: partnersReducer,
  },
});
export default store;
