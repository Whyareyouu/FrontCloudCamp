import React from 'react';
import {ButtonProps} from "./Button.props";
import {StyledButton} from "./Button.styles";

const Button = ({type, className, id, children, appearance, onClick, disabled, style, ...props}: ButtonProps) => {
    return (
        <StyledButton type={type} className={className} id={id} appearance={appearance} onClick={onClick}
                      disabled={disabled} style={style}>
            {children}
        </StyledButton>
    );
};

export default Button;
