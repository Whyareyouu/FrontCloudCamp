import React, {ForwardedRef, forwardRef} from 'react';
import {CheckboxProps} from "./Checkbox.interface";
import {Label} from "../index";
import {StyledCheckBox} from "./Checkbox.styles";


const Checkbox = forwardRef(({
                                 name,
                                 id,
                                 className,
                                 children,
                                 value,
                                 onChange,
                                 checked,
                                 ...props
                             }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>): React.JSX.Element => {
        return (
            <div>
                <Label direction='row'>
                    <StyledCheckBox type='checkbox' name={name} id={id} className={className} value={value}
                                    onChange={onChange} checked={checked}
                                    ref={ref}/>
                    {children}
                </Label>
            </div>
        );
    }
)

export default Checkbox;
