import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { songsApi } from "../Services/songsServices";
import selectionReduce from "../Features/Selection/selectionSlice";
import libraryReduce from "../Features/Library/librarySlice";


const store = configureStore({
    reducer: {
        selectionReduce,
        libraryReduce,
        [songsApi.reducerPath]: songsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(songsApi.middleware),
})

setupListeners(store.dispatch);

export default store;