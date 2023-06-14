import React from 'react';
import {Error} from "./ErrorMessage.styles";
import ErrorMessageIcon from "./ErrorMessageIcon";

const ErrorMessage: React.FC<React.HTMLProps<HTMLDivElement>> = ({children}) => {
    return (
        <Error>
            <ErrorMessageIcon />
            {children}
        </Error>
    );
};

export default ErrorMessage;
