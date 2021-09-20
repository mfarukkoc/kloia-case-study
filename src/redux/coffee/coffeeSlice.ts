import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { coffeeCategory } from "../../@fake-db/coffeeDB";

export type categoryFilter = "all" | coffeeCategory;

const initialState = {
  category: "all",
  searchKeyword: "",
};

const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    setCategoryFilter(state, action: PayloadAction<categoryFilter>) {
      return { ...state, category: action.payload };
    },
    setSearchKeyword(state, action: PayloadAction<string>) {
      return { ...state, searchKeyword: action.payload };
    },
  },
});

export const { setCategoryFilter, setSearchKeyword } =
  categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;
