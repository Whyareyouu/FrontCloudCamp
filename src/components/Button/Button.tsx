import React from 'react';
import {ButtonProps} from "./Button.interface";
import {StyledButton} from "./Button.styles";

const Button = ({className, children, appearance, ...props}: ButtonProps) => {
    return (
        <StyledButton className={className} appearance={appearance}>
            {children}
        </StyledButton>
    );
};

export default Button;
