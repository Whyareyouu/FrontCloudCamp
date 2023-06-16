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
import {usePostFormDataMutation} from "../../../components/redux/API/sber.api";
import {convertToValidData} from "../../../helpers/helpers";
import FormStepThirdModal from "./FormStepThirdModal/FormStepThirdModal";

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

    const {handleSubmit, control, formState: {errors}} = useForm<IFormStepThird>({
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
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {isOpen && (
                <FormStepThirdModal isSuccess={isSuccess} isLoading={isLoading} onClose={handleCloseModal}/>
            )}
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
