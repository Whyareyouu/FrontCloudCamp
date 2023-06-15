import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {Button, Input, Label} from "../../../components";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {updateFormStepFirst} from "../../../components/redux/slices/formSlice";
import {IFormStepFirst} from "../../../interfaces/Form.interface";
import {ButtonContainer, StyledForm} from "./FormStepFirst.styles";
import Select from "../../../components/Select/Select";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./validator";

const options = [
    {value: 'man', label: 'man'},
    {value: 'women', label: 'woman'},
];

const FormStepFirst = () => {
    const formFirstState = useAppSelector(state => state.FormSliceReducer)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, control, formState: {errors, isDirty, isValid}, reset} = useForm<IFormStepFirst>({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            nickname: formFirstState.nickname,
            name: formFirstState.name,
            sername: formFirstState.sername,
            sex: formFirstState.sex,
        }
    })

    const onSubmit = (formState: IFormStepFirst) => {
        dispatch(updateFormStepFirst({...formState}))
    }


    const isFormValid = isDirty && isValid && errors;

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Label>
                Nickname
                <Input placeholder='Nickname' error={errors.nickname} children={'Введите ваш никнейм'}
                       {...register('nickname', {
                           required: {
                               value: true,
                               message: 'Это поле обязательно'
                           }
                       })}
                       onClick={() => reset({nickname: ''})}/>
            </Label>
            <Label>
                Name
                <Input placeholder='Name' error={errors.name} children={'Введите ваше имя'}
                       {...register('name', {
                           required: {
                               value: true,
                               message: 'Это поле обязательно'
                           }
                       })}
                       onClick={() => reset({name: ''})}
                />
            </Label>
            <Label>
                Sername
                <Input placeholder='Surname' error={errors.sername} children={'Введите вашу фамилию'}
                       {...register('sername', {
                           required: {
                               value: true,
                               message: 'Это поле обязательно'
                           }
                       })}
                       onClick={() => reset({sername: ''})}
                />
            </Label>
            <Label>
                Sex
                <Controller name='sex' control={control} render={({field}) => (
                    <Select options={options} onChange={field.onChange} placeholder='Не выбрано'
                            error={errors.sex?.value} tip={"Выберите ваш пол"}/>
                )}/>
            </Label>
            <ButtonContainer>
                <Button appearance='border' type='button'>Назад</Button>
                <Button appearance='primary' disabled={!isFormValid}>Далее</Button>
            </ButtonContainer>
        </StyledForm>
    );
};

export default FormStepFirst;
