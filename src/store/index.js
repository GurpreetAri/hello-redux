// import {createStore} from "redux";
// import reducer from "..//reducers"
//
//
// const initialState = {tech: "Reacting"};
// export const store = createStore(reducer, initialState);
//
// // export default (state) => {
// //     return state
// // }

import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { tech: "React !#!@#@" };
export const store = createStore(reducer, initialState);
