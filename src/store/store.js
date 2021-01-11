import reduce from "../reduce/index";
import thunk from "react-thunk";
import {createStore, applyMiddleware} from "redux";

const store = createStore(reduce, applyMiddleware(thunk));
export default store;