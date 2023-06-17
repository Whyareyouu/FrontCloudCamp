import React, {ForwardedRef, forwardRef} from 'react';
import {CountOfLetters, MessagesContainer, StyledTextarea, Tip} from "./Textarea.styles";
import {TextareaProps} from "./Textarea.props";
import {ErrorMessage} from "../index";

const Textarea = forwardRef(({
                                 id,
                                 onChange,
                                 value,
                                 className,
                                 placeholder,
                                 children,
                                 error
                             }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div>
            <StyledTextarea id={id} className={className} value={value} onChange={onChange} placeholder={placeholder}
                            ref={ref}/>
            <MessagesContainer>
                {error ? <ErrorMessage>{error.message}</ErrorMessage> : <Tip>{children}</Tip>}
                <CountOfLetters>{value.replaceAll(' ', '').length}</CountOfLetters>
            </MessagesContainer>
        </div>
    );
});

export default Textarea;
