import React from 'react';
import {ButtonProps} from "./Button.interface";
import {StyledButton} from "./Button.styles";

const Button = ({className, id, children, appearance, onClick, disabled,style, ...props}: ButtonProps) => {
    return (
        <StyledButton className={className} id={id} appearance={appearance} onClick={onClick} disabled={disabled} style={style}>
            {children}
        </StyledButton>
    );
};

export default Button;
