import React from 'react';
import {Button, Label, Textarea} from "../../../components";
import {Controller, useForm} from "react-hook-form";
import {IFormStepThird} from "../../../interfaces/Form.interface";
import {ButtonContainer} from "./FormStepThird.styles";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./validator";
import {convertToValidData} from "../../../helpers/helpers";
import FormStepThirdModal from "./FormStepThirdModal/FormStepThirdModal";
import {usePostFormDataMutation} from "../../../redux/API/sber.api";
import {updateFormStepThird} from "../../../redux/slices/formSlice";

type FormStepThirdProps = {
    onNext: () => void;
    onPrev: () => void;
}

const FormStepThird: React.FC<React.HTMLProps<HTMLFormElement> & FormStepThirdProps> = ({onNext, onPrev}) => {
    const dispatch = useAppDispatch()
    const formData = useAppSelector(state => state.FormSliceReducer)
    const [postFormData, {isSuccess, isLoading}] = usePostFormDataMutation()
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const {handleSubmit, control, formState: {errors, isValid}} = useForm<IFormStepThird>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {about: formData.about}
    })
    const onSubmit = async (formState: IFormStepThird) => {
        dispatch(updateFormStepThird(formState))
        try {
            const validFormData = convertToValidData({...formData, ...formState})
            await postFormData(validFormData)
            handleOpenModal()
        } catch (e) {
        }

    }
    const isFormValid = isValid && errors;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {isOpen && (
                <FormStepThirdModal isSuccess={isSuccess} isLoading={isLoading} onClose={handleCloseModal}/>
            )}
            <Label>
                About
                <Controller control={control} name={'about'} render={({field}) => (
                    <Textarea {...field} children={'Введите информацию о себе'} error={errors.about} id="field-about"/>
                )}/>
            </Label>
            <ButtonContainer>
                <Button appearance='border' onClick={onPrev} id='button-back'>Назад</Button>
                <Button appearance='primary' onClick={onNext} id='button-send' disabled={!isFormValid}>Отправить</Button>
            </ButtonContainer>
        </form>
    );
};

export default FormStepThird;
