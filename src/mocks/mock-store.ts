import { createStore } from "redux";
import { mockRootReducer } from "./mock-reducer";
import { useDispatch } from "react-redux";

export const mockStore = createStore(mockRootReducer);

export type MockAppDispatch = typeof mockStore.dispatch;

export const useMockAppDispatch = () => useDispatch<MockAppDispatch>();
