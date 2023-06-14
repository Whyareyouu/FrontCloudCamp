import React, {ForwardedRef, forwardRef} from 'react';
import {InputContainer, StyledInput, Tip} from "./Input.styles";
import {InputProps} from "./Input.interface";
import {ErrorMessage} from "../index";


const Input = forwardRef(({
                              className,
                              id,
                              name,
                              placeholder,
                              value,
                              disabled,
                              onChange,
                              error,
                              children,
                              ...props
                          }: InputProps, ref: ForwardedRef<HTMLInputElement>): React.JSX.Element => {
        return (
            <InputContainer>
                <StyledInput className={className} id={id} name={name} placeholder={placeholder} value={value}
                             disabled={disabled} ref={ref} onChange={onChange} error={!!error}/>
                {error ? <ErrorMessage>{error.message}</ErrorMessage> : <Tip>{children}</Tip>}
            </InputContainer>
        );
    }
)


export default Input;
