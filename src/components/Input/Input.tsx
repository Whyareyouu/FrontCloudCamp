import React from 'react';
import {StyledInput} from "./Input.styles";
import {InputProps} from "./Input.interface";

const Input = ({className,id, name, placeholder, value, disabled, ...props}: InputProps): React.JSX.Element => {
    return (
        <StyledInput className={className} id={id} name={name} placeholder={placeholder} value={value} disabled={disabled}/>
    );
};

export default Input;
