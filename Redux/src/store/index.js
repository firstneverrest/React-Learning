import { createSlice } from "@reduxjs/toolki";

import counterReducer from './counter'
import authReducer from './auth'

// create store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
