import {configureStore} from "@reduxjs/toolkit";
import {FormSliceReducer} from "./slices/formSlice";

export const store = configureStore({
    reducer: {
        FormSliceReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;