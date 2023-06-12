import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MultiFormState} from "../../../interfaces/MultiForm.interface";
import {IFormStepFirst, IFormStepSecond} from "../../../interfaces/Form.interface";


const formInitialState: MultiFormState = {
    nickname: '',
    name: '',
    sername: '',
    phone: '',
    email: '',
    sex: '',
    advantages: [],
    radio: '',
    checkbox: [],
    about: ''
}

const formSlice = createSlice({
    name: 'formSlice',
    initialState: formInitialState,
    reducers: {
        updateFormStepFirst: (state, action: PayloadAction<IFormStepFirst>) => {
            return {...state, ...action.payload}
        },
        updateFormStepSecond:(state, action: PayloadAction<IFormStepSecond>) => {
            return {...state, ...action.payload}
        }
    }
})

export const {updateFormStepFirst, updateFormStepSecond}= formSlice.actions
export const FormSliceReducer = formSlice.reducer