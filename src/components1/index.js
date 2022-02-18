import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  accaunt: reducer,
});

export default reducers;
