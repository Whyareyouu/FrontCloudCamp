import React, {ForwardedRef, forwardRef} from 'react';
import {CustomRadioButton, CustomRadioInput, CustomRadioText} from "./RadioButton.styles";
import {RadioButtonProps} from "./RadioButton.interface";

const RadioButton = forwardRef(({
                                    id,
                                    name,
                                    value,
                                    children,
                                    checked,
                                    onChange
                                }: RadioButtonProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <CustomRadioButton htmlFor={id}>
            <CustomRadioInput id={id} name={name} value={value} checked={checked} onChange={onChange} ref={ref}/>
            <span className="checkmark"></span>
            <CustomRadioText>{children}</CustomRadioText>
        </CustomRadioButton>
    );


})


export default RadioButton;
