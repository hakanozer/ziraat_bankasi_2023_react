import { combineReducers } from "redux";
import { NoteReducer } from "./reducers/NoteReducer";
import { configureStore } from "@reduxjs/toolkit";

const combine = combineReducers({
    NoteReducer, 
})

export type StateType = ReturnType<typeof combine>

export const store = configureStore({reducer: combine})