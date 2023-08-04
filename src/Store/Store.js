import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import selectionReduce from "../Features/Selection/selectionSlice";
import { songsApi } from "../Services/songsServices";


const store = configureStore({
    reducer: {
        selectionReduce,
        [songsApi.reducerPath]: songsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(songsApi.middleware),
})

setupListeners(store.dispatch);

export default store;