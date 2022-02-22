import { directoryData } from "./directory.data";
import { AnyAction } from "redux";

const INITIAL_STATE = { sections: directoryData };

const directoryReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
