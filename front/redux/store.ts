import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { DevReducer } from "./reducers/devReduce";
import { createWrapper } from "next-redux-wrapper"

const makeStore = () => createStore(DevReducer, composeWithDevTools(applyMiddleware()));

export const wrapper = createWrapper(makeStore)
