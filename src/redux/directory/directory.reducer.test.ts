import directoryReducer from "./directory.reducer";
import { directoryData } from "./directory.data";

describe("Shop Reducer", () => {
  it("should return given state", () => {
    expect(
      directoryReducer({ sections: [directoryData[0]] }, { type: "" })
    ).toEqual({
      sections: [directoryData[0]],
    });
  });
});
