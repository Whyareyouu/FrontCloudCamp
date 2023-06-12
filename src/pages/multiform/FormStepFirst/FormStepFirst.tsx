import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Input, Label} from "../../../components";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {updateFormStepFirst} from "../../../components/redux/slices/formSlice";
import {IFormStepFirst} from "../../../interfaces/Form.interface";
import Select from "../../../components/Select/Select";

const FormStepFirst = () => {
    const formFirstState = useAppSelector(state => state.FormSliceReducer)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, formState: {errors, isDirty, isValid}} = useForm<IFormStepFirst>({defaultValues: {
            nickname: formFirstState.nickname,
            name: formFirstState.name,
            sername: formFirstState.sername,
            sex: formFirstState.sex,
        }})
    const onSubmit = (formState: IFormStepFirst) => {
        dispatch(updateFormStepFirst({...formState}))
    }
    const isFormValid = isDirty && isValid && errors;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label>
                Nickname
                <Input placeholder='Nickname' {...register('nickname', {
                    required: {
                        value: true,
                        message: 'Это поле обязательно'
                    }
                })}/>
            </Label>
            <Label>
                Name
                <Input placeholder='Name' {...register('name', {
                    required: {
                        value: true,
                        message: 'Это поле обязательно'
                    }
                })}/>
            </Label>
            <Label>
                Sername
                <Input placeholder='Surname' {...register('sername', {
                    required: {
                        value: true,
                        message: 'Это поле обязательно'
                    }
                })}/>
            </Label>
            <Label>
                Sex
                <Input placeholder='Sex' {...register('sex', {
                    required: {
                        value: true,
                        message: 'Это поле обязательно'
                    }
                })}/>
            </Label>
            <Button appearance='border'>Назад</Button>
            <Button appearance='primary' disabled={!isFormValid}>Далее</Button>
        </form>
    );
};

export default FormStepFirst;
