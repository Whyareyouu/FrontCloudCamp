import React from 'react';
import {Button, Checkbox, ErrorMessage, Input, Label} from "../../../components";
import RadioButton from "../../../components/RadioButton/RadioButton";
import {Advantage, Advantages, ButtonContainer, RemoveAdvantage, StyledForm} from "./FormStepSecond.style";
import {IFormStepSecond} from "../../../interfaces/Form.interface";
import {useFieldArray, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {updateFormStepSecond} from "../../../components/redux/slices/formSlice";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./validator";

type FormStepSecondProps = {
    onNext: () => void;
    onPrev: () => void;
}

const FormStepSecond: React.FC<React.HTMLProps<HTMLDivElement> & FormStepSecondProps> = ({onNext, onPrev}) => {
    const formState = useAppSelector(state => state.FormSliceReducer)
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<IFormStepSecond>({
        mode: "onChange", //@ts-ignore
        resolver: yupResolver(validationSchema),
        defaultValues: {
            advantages: formState.advantages,
            radio: formState.radio.toString(),
            checkbox: formState.checkbox.map(element => element.toString())
        },
    })

    const {fields, append, update, remove} = useFieldArray({
        control,
        name: "advantages",
    });

    const onSubmit = (formState: IFormStepSecond) => {
        dispatch(updateFormStepSecond({...formState}))
        onNext()
    }

    const isFormValid = isValid && errors;
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Advantages>
                    Advantages
                    {fields.map((item, index) =>
                        (
                            <Advantage key={item.id}>
                                <Input
                                    id={`field-adavatages-${index + 1}`}
                                    {...register(`advantages.${index}.advantages` as const,)}
                                    defaultValue={item.advantages}
                                    error={errors.advantages?.[index]?.advantages}
                                    onClick={() => update(index, {advantages: ''})}
                                    placeholder='Advantage'
                                />
                                <RemoveAdvantage onClick={() => remove(index)}/>
                            </Advantage>
                        )
                    )}
                    <Button type='button' appearance='border' style={{fontSize: "24px"}} id='button add'
                            onClick={() => append({advantages: ''})}>+</Button>
                </Advantages>
            </div>
            <div>
                <Label gap={2}>
                    Checkbox group
                    <Checkbox children='1' id='field-checkbox-group-option-1' {...register('checkbox')} value="1" />
                    <Checkbox children='2' id='field-checkbox-group-option-2' {...register('checkbox')} value="2" />
                    <Checkbox children='3' id='field-checkbox-group-option-3' {...register('checkbox')} value="3" />
                    {errors.checkbox && <ErrorMessage>{errors.checkbox?.message}</ErrorMessage>}
                </Label>
            </div>
            <div>
                <Label gap={2}>
                    Radio Group
                    <RadioButton children='1' id='field-radio-group-option-1' value={1} {...register('radio')}/>
                    <RadioButton children='2' id='field-radio-group-option-2' value={2} {...register('radio')}/>
                    <RadioButton children='3' id='field-radio-group-option-3' value={3} {...register('radio')}/>
                    {errors.radio && <ErrorMessage>{errors.radio?.message}</ErrorMessage>}
                </Label>
            </div>
            <ButtonContainer>
                <Button appearance='border' type='button' onClick={onPrev}>Назад</Button>
                <Button appearance='primary' disabled={!isFormValid}>Далее</Button>
            </ButtonContainer>
        </StyledForm>
    );
};

export default FormStepSecond;
