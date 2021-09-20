import store from "../../app/store";
import {
  categoryFilter,
  setCategoryFilter,
  setSearchKeyword,
} from "./coffeeSlice";

describe("coffeeReducer", () => {
  test("should set searchKeyword", () => {
    const searchKeyword = "testing keyword123";
    store.dispatch(setSearchKeyword(searchKeyword));
    expect(store.getState().coffeeSlice.searchKeyword).toBe(searchKeyword);
  });

  test("should set category", () => {
    const category: categoryFilter = "hot";
    store.dispatch(setCategoryFilter(category));
    expect(store.getState().coffeeSlice.category).toBe(category);
  });
});
