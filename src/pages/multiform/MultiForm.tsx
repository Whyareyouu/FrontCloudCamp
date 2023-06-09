import React from 'react';
import {Button, Input, Label} from "../../components";
import {useForm} from "react-hook-form";
import {IFormStepFirst} from "../../components/interfaces/Form.interface";

const MultiForm = () => {
    const {register, handleSubmit, formState: {errors, isDirty, isValid}} = useForm<IFormStepFirst>()
    const onSubmit = (formState: IFormStepFirst) => {
        console.log(formState)
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

export default MultiForm;
