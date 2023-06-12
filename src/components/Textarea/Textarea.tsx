import React, {ForwardedRef, forwardRef} from 'react';
import {StyledTextarea} from "./Textarea.styles";
import {TextareaProps} from "./Textarea.interface";

const Textarea = forwardRef(({
                                 id,
                                 onChange,
                                 value,
                                 className,
                                 placeholder
                             }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div>
            <StyledTextarea id={id} className={className} value={value} onChange={onChange} placeholder={placeholder}
                            ref={ref}/>
        </div>
    );
});

export default Textarea;
