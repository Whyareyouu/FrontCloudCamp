import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {Button, Input, Label, Select} from "../../../components";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {updateFormStepFirst} from "../../../components/redux/slices/formSlice";
import {IFormStepFirst} from "../../../interfaces/Form.interface";
import {ButtonContainer, StyledForm} from "./FormStepFirst.styles";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./validator";

const options = [
    {value: 'man', label: 'man'},
    {value: 'woman', label: 'woman'},
];

type FormStepFirstProps = {
    onNext: () => void;
    onPrev: () => void;
}

const FormStepFirst: React.FC<React.HTMLProps<HTMLFormElement> & FormStepFirstProps> = ({onNext, onPrev}) => {
    const formFirstState = useAppSelector(state => state.FormSliceReducer)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, control, formState: {errors, isValid}, reset} = useForm<IFormStepFirst>({
        mode: 'onChange',
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
        onNext()
    }


    const isFormValid = isValid && errors;

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Label>
                Nickname
                <Input placeholder='Nickname' error={errors.nickname} id='field-nickname'
                       children={'Введите ваш никнейм'}
                       {...register('nickname')}
                       onClick={() => reset({nickname: ''})}/>
            </Label>
            <Label>
                Name
                <Input placeholder='Name' error={errors.name} id='field-name'
                       children={'Введите ваше имя'}
                       {...register('name')}
                       onClick={() => reset({name: ''})}
                />
            </Label>
            <Label>
                Sername
                <Input placeholder='Surname' error={errors.sername}
                       id='field-sername'
                       children={'Введите вашу фамилию'}
                       {...register('sername')}
                       onClick={() => reset({sername: ''})}
                />
            </Label>
            <Label>
                Sex
                <Controller name='sex' control={control} render={({field}) => (
                    <Select options={options} onChange={field.onChange} id='field-sex'
                            placeholder='Не выбрано'
                            error={errors.sex?.value} tip={"Выберите ваш пол"} value={field.value}/>
                )}/>
            </Label>
            <ButtonContainer>
                <Button appearance='border' type='button' onClick={onPrev} id='button-back'>Назад</Button>
                <Button appearance='primary' disabled={!isFormValid} id='button-next'>Далее</Button>
            </ButtonContainer>
        </StyledForm>
    );
};

export default FormStepFirst;
