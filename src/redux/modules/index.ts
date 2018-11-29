import { combineReducers } from "redux";
import counts from "./counts";
const createRootReducer = () => combineReducers({ counts });
export default createRootReducer;
