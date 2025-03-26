
import todoReducer from "./slices/todoSlices";
import { configureStore } from "@reduxjs/toolkit";
// reducers imports


const store = configureStore({
    reducer :{
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV != 'production',
})


export default store
