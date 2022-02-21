import { directoryData } from "./directory.data";

const INITIAL_STATE = { sections: directoryData };

const directoryReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
