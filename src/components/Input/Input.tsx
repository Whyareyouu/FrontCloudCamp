import React, {ForwardedRef, forwardRef} from 'react';
import {StyledInput} from "./Input.styles";
import {InputProps} from "./Input.interface";


const Input = forwardRef(({
                              className,
                              id,
                              name,
                              placeholder,
                              value,
                              disabled,
                              ...props
                          }: InputProps, ref: ForwardedRef<HTMLInputElement>): React.JSX.Element => {
        return (
            <StyledInput className={className} id={id} name={name} placeholder={placeholder} value={value}
                         disabled={disabled} ref={ref}/>
        );
    }
)


export default Input;
