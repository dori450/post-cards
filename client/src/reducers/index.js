//The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

import { combineReducers } from "redux";

import posts from "./posts";

export const reducers = combineReducers({ posts });
