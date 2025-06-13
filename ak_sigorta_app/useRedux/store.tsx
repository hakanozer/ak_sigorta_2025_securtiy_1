import { combineReducers, legacy_createStore } from "redux";
import { LikesReducer } from "../useRedux/LikesReducer";

const combine = combineReducers({
  LikesReducer
})

export type StateType = ReturnType<typeof combine>
export const store = legacy_createStore(combine)