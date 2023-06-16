import React from 'react';
import {ErrorButton, ErrorIcon, ModalTitle, SuccessIcon, TitleContainer} from "./Modal.styles";
import {Button, Modal} from "../../../../components";
import ClearIcon from "../../../../components/Input/ClearIcon";
import {useNavigate} from "react-router-dom";

interface FormStepThirdModalProps {
    isSuccess: boolean;
    isLoading: boolean;
    onClose: () => void;
}

const FormStepThirdModal = ({isSuccess, isLoading, onClose}: FormStepThirdModalProps) => {
    const navigate = useNavigate()
    const handleCloseSuccess = () => {
        onClose()
        navigate('/')
    }

    const modalContentIsSuccess = (
        <>
            <ModalTitle>Форма успешно отправлена</ModalTitle>
            <SuccessIcon/>
            <Button appearance='primary' onClick={handleCloseSuccess} id='button-to-main'>На главную</Button>
        </>
    );

    const modalContentIsError = (
        <>
            <TitleContainer>
                <ModalTitle>Ошибка</ModalTitle>
                <ClearIcon onClick={onClose}/>
            </TitleContainer>
            <ErrorIcon/>
            <ErrorButton appearance='primary' onClick={onClose} id='button-close'>Закрыть</ErrorButton>
        </>
    );

    if (isSuccess && !isLoading) {
        return (
            <Modal>
                {modalContentIsSuccess}
            </Modal>
        );
    } else {
        return (
            <Modal>
                {modalContentIsError}
            </Modal>
        );
    }

};

export default FormStepThirdModal;
