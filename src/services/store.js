import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./redux/formSlice";
// import { apiSlice } from './api';
// import userReducer from './redux/authSlice'
// import orderReducer from './redux/orderSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
