import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dataApi } from "../Services/dataServices";
import { authApi } from "../Services/AuthSevices";
import selectionReducer from "../Features/Selection/selectionSlice";
import libraryReducer from "../Features/Library/librarySlice";
import userReducer from "../Features/User/userSlice";
import playerReducer from '../Features/Player/playerSlice'


const store = configureStore({
    reducer: {
        selectionReducer,
        libraryReducer,
        userReducer,
        playerReducer,
        [dataApi.reducerPath]: dataApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch);

export default store;