import { configureStore } from "@reduxjs/toolkit";
import {
  partnersReducer,
  homePageReducer,
  publicDataReducer,
} from "./partnersSlice";
import { servicesReducer } from "./servicesSlice";
import { aboutReducer } from "./aboutSlice";

const store = configureStore({
  reducer: {
    partners: partnersReducer,
    homePage: homePageReducer,
    public_data: publicDataReducer,
    services: servicesReducer,
    about: aboutReducer,
  },
});
export default store;
