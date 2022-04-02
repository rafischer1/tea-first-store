import shopReducer from "./shop.reducer";
import SHOP_DATA from "./shop.data";

describe("Shop Reducer", () => {
  it("should return initial state", () => {
    expect(shopReducer({ collections: [SHOP_DATA[0]] }, { type: "" })).toEqual({
      collections: [SHOP_DATA[0]],
    });
  });
});
