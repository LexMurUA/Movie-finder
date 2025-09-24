import { configureStore } from "@reduxjs/toolkit";
import { TMDB } from "../api/api";



export const store = configureStore({
    reducer:{
        [TMDB.reducerPath]:TMDB.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(TMDB.middleware)
})