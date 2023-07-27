import { configureStore } from "@reduxjs/toolkit";
import selectionReduce from "../Features/Selection/selectionSlice";

export default configureStore({
    reducer: {
        selectionReduce
    }
})