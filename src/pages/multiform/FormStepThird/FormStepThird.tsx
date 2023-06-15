import React from 'react';
import {Button, Label} from "../../../components";
import Textarea from "../../../components/Textarea/Textarea";
import {Controller, useForm} from "react-hook-form";
import {IFormStepThird} from "../../../interfaces/Form.interface";
import {ButtonContainer} from "./FormStepThird.styles";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {updateFormStepThird} from "../../../components/redux/slices/formSlice";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./validator";

type FormStepThirdProps = {
    onNext: () => void;
    onPrev: () => void;
}

const FormStepThird: React.FC<React.HTMLProps<HTMLFormElement> & FormStepThirdProps> = ({onNext, onPrev}) => {
    const dispatch = useAppDispatch()
    const formState = useAppSelector(state => state.FormSliceReducer)

    const {handleSubmit, control, formState: {errors}} = useForm<IFormStepThird>({
        resolver: yupResolver(validationSchema),
        defaultValues: {about: formState.about}
    })

    const onSubmit = (formState: IFormStepThird) => {
        console.log(formState)
        dispatch(updateFormStepThird(formState))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label>
                About
                <Controller control={control} name={'about'} render={({field}) => (
                    <Textarea {...field} children={'Введите информацию о себе'} error={errors.about}/>
                )}/>
            </Label>
            <ButtonContainer>
                <Button appearance='border' onClick={onPrev}>Назад</Button>
                <Button appearance='primary' onClick={onNext}>Отправить</Button>
            </ButtonContainer>
        </form>
    );
};

export default FormStepThird;
