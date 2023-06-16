import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MultiFormState} from "../../interfaces/MultiForm.interface";
import {IFormStepFirst, IFormStepSecond, IFormStepThird, IStartedForm} from "../../interfaces/Form.interface";


const formInitialState: MultiFormState = {
    nickname: '',
    name: '',
    sername: '',
    phone: '',
    email: '',
    sex: {label: '', value: ''},
    advantages: [{advantages: ''}],
    radio: 0,
    checkbox: [],
    about: '',
}

const formSlice = createSlice({
    name: 'formSlice',
    initialState: formInitialState,
    reducers: {
        updateStartedForm: (state, action: PayloadAction<IStartedForm>) => {
            return {...state, ...action.payload}
        },
        updateFormStepFirst: (state, action: PayloadAction<IFormStepFirst>) => {
            return {...state, ...action.payload}
        },
        updateFormStepSecond: (state, action: PayloadAction<IFormStepSecond>) => {
            return {...state, ...action.payload}
        },
        updateFormStepThird: (state, action: PayloadAction<IFormStepThird>) => {
            return {...state, ...action.payload}
        }
    }
})

export const {updateFormStepFirst, updateFormStepSecond, updateStartedForm,updateFormStepThird} = formSlice.actions
export const FormSliceReducer = formSlice.reducer