import {configureStore} from "@reduxjs/toolkit";
import {FormSliceReducer} from "./slices/formSlice";
import {sberApi} from "./API/sber.api";

export const store = configureStore({
    reducer: {
        FormSliceReducer,
        [sberApi.reducerPath]: sberApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sberApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;