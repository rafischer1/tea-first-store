import { directoryData } from "./directory.data";
import { AnyAction } from "redux";

const DIRECTORIES_INITIAL_STATE = { sections: directoryData };

const directoryReducer = (
  state = DIRECTORIES_INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
