import React from 'react';
import {CustomRadioButton, CustomRadioInput, CustomRadioText} from "./RadioButton.styles";
import {RadioButtonProps} from "./RadioButton.interface";

const RadioButton = ({ id, name, value, children, checked, onChange }:RadioButtonProps) => {

    return (
        <CustomRadioButton htmlFor={id}>
            <CustomRadioInput id={id} name={name} value={value} checked={checked} onChange={onChange}/>
            <span className="checkmark"></span>
            <CustomRadioText>{children}</CustomRadioText>
        </CustomRadioButton>
    );


};

export default RadioButton;
