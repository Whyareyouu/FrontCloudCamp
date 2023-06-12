import React from 'react';
import {Button, Checkbox, Input, Label} from "../../../components";
import RadioButton from "../../../components/RadioButton/RadioButton";
import {Advantage, Advantages, RemoveAdvantage, StyledForm} from "./FormStepSecond.style";
import {IFormStepSecond} from "../../../interfaces/Form.interface";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {updateFormStepSecond} from "../../../components/redux/slices/formSlice";

const FormStepSecond = () => {
    const formState = useAppSelector(state => state.FormSliceReducer)
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isDirty, isValid}
    } = useForm<IFormStepSecond>({
        defaultValues: {
            advantages: formState.advantages,
            radio: formState.radio,
            checkbox: formState.checkbox
        }
    })

    const {fields, append, remove} = useFieldArray({
        control,
        name: "advantages",
    });

    const onSubmit = (formState: IFormStepSecond) => {
        dispatch(updateFormStepSecond({...formState}))
    }

    const isFormValid = isDirty && isValid && errors;

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Advantages>
                    Advantages
                    {fields.map((field, index) => (
                        <Advantage key={field.id}>
                            <Controller control={control} name={`advantages.${index}`} render={({field}) => (<>
                                <Input id={`field-adavatages-${index + 1}`} onChange={field.onChange}
                                       value={field.value.toString()} placeholder='Advantage'/>
                            </>)}/>
                            <RemoveAdvantage onClick={() => remove(index)}/>
                        </Advantage>
                    ))}
                    <Button type='button' appearance='border' style={{fontSize: "24px"}} id='button add'
                            onClick={() => append('')}>+</Button>
                </Advantages>
            </div>
            <div>
                <Label gap={2}>
                    Checkbox group
                    <Checkbox children='1' id='field-checkbox-group-option-1' value={1} {...register('checkbox')}/>
                    <Checkbox children='2' id='field-checkbox-group-option-2' value={2} {...register('checkbox')}/>
                    <Checkbox children='3' id='field-checkbox-group-option-3' value={3} {...register('checkbox')}/>
                </Label>
            </div>
            <div>
                <Label gap={2}>
                    Radio Group
                    <RadioButton children='1' id='field-radio-group-option-1' value={1} {...register('radio')}/>
                    <RadioButton children='2' id='field-radio-group-option-2' value={2} {...register('radio')}/>
                    <RadioButton children='3' id='field-radio-group-option-3' value={3} {...register('radio')}/>
                </Label>
            </div>
            <Button appearance='border'>Назад</Button>
            <Button appearance='primary' disabled={!isFormValid}>Далее</Button>
        </StyledForm>
    );
};

export default FormStepSecond;
