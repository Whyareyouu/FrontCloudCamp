import React from 'react';
import {CustomLabel} from "./Label.styles";
import {LabelProps} from "./Label.props";

const Label = ({className, children, direction = 'column', gap = 8, htmlFor, ...props}: LabelProps) => {
    return (
        <CustomLabel className={className} htmlFor={htmlFor} direction={direction} gap={gap}>
            {children}
        </CustomLabel>
    );
};

export default Label;
