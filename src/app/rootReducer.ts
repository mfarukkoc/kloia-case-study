import { combineReducers } from "@reduxjs/toolkit";

import coffeeSlice from "../redux/coffee/coffeeSlice";

const rootReducer = combineReducers({
  coffeeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
