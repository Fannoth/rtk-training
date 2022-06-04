import { configureStore } from "@reduxjs/toolkit";
import { reduxLogger } from "redux-logger";
import { cakeReducer } from "../features/cake/cakeSlice";
import { iceCreamReducer } from "../features/iceCream/iceCreamSlice";
import { userReducer } from "../features/user/userReducer";

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
