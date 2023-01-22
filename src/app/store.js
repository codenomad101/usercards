import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Features/users/UserSlice";

export const store=configureStore({
    reducer:{
        users:UserReducer,
    }
})