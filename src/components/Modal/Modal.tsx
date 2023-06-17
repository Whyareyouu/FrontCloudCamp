import React from 'react';
import { ModalContent, ModalOverlay} from "./Modal.styles";
import {ModalProps} from "./Modal.props";

const Modal = ({ children}:ModalProps) => {
    return (
        <ModalOverlay>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;