import userReducer from "./user.reducer";
import { UserActionTypes } from "./user.types";

describe("User Reducer", () => {
  it("should handle SIGN_OUT_START action", () => {
    expect(
      userReducer(
        { isLoading: false, currentUser: null, error: null },
        { type: UserActionTypes.SIGN_OUT_START, payload: {} }
      )
    ).toEqual({ isLoading: true, currentUser: null, error: null });
  });

  it("should handle SIGN_OUT_FAILED | SIGN_IN_FAILED action", () => {
    expect(
      userReducer(
        { isLoading: false, currentUser: null, error: null },
        { type: UserActionTypes.SIGN_OUT_FAILED, payload: "Error here!" }
      )
    ).toEqual({ isLoading: false, currentUser: null, error: "Error here!" });
  });

  it("should handle SIGN_OUT_SUCCESS action", () => {
    expect(
      userReducer(
        { isLoading: false, currentUser: null, error: null },
        { type: UserActionTypes.SIGN_OUT_SUCCESS, payload: {} }
      )
    ).toEqual({ isLoading: false, currentUser: null, error: null });
  });

  it("should handle SET_CURRENT_USER action", () => {
    expect(
      userReducer(
        { isLoading: false, currentUser: null, error: null },
        {
          type: UserActionTypes.SET_CURRENT_USER,
          payload: { name: "Cool Hand Luke", id: 57 },
        }
      )
    ).toEqual({
      isLoading: false,
      currentUser: { name: "Cool Hand Luke", id: 57 },
      error: null,
    });
  });
});
