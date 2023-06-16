import {createSlice} from "@reduxjs/toolkit";

export const stepSlice = createSlice({
    name: 'stepSlice',
    initialState: 1,
    reducers: {
        setNextStep: (state) => {
            return state + 1
        },
        setPrevStep: (state) => {
            return state - 1
        }
    }
})

export const {setNextStep, setPrevStep} = stepSlice.actions;
export const stepSliceReducer = stepSlice.reducer;