import React from 'react';
import {CustomLabel} from "./Label.styles";
import {LabelProps} from "./Label.interface";

const Label = ({className, children, htmlFor}: LabelProps) => {
    return (
        <CustomLabel className={className} htmlFor={htmlFor}>
            {children}
        </CustomLabel>
    );
};

export default Label;
