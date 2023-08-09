import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { songsApi } from "../Services/songsServices";
import { authApi } from "../Services/AuthSevices";
import selectionReduce from "../Features/Selection/selectionSlice";
import libraryReduce from "../Features/Library/librarySlice";
import userReduce from "../Features/User/userSlice";


const store = configureStore({
    reducer: {
        selectionReduce,
        libraryReduce,
        userReduce,
        [songsApi.reducerPath]: songsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(songsApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch);

export default store;