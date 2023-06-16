import React, {useState} from 'react';
import {Option, OptionsContainer, SelectButton, SelectContainer, Tip} from "./Select.style";
import {SelectProps, TOption} from "./Select.interface";
import {ErrorMessage} from "../index";

const Select: React.FC<SelectProps> = ({options, onChange, placeholder, error, tip, value}): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<null | TOption>(null);
    React.useEffect(()=> {
        if(Object.values(value).filter(value => value).length !== 0){
            setSelectedOption(value)
        }
    }, [value])


    const handleToggleOptions = () => {
        setIsOpen(!isOpen);
    };
    const handleSelectOption = (option: TOption) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <SelectContainer>
            <SelectButton onClick={handleToggleOptions} type='button' isOpen={isOpen} error={!!error}>
                {selectedOption ? selectedOption.label : placeholder}
            </SelectButton>
            {isOpen && (
                <OptionsContainer>
                    {options.map((option) => (
                        <Option key={option.value} onClick={() => handleSelectOption(option)}>
                            {option.label}
                        </Option>
                    ))}
                </OptionsContainer>
            )}
            {error ? <ErrorMessage>{error.message}</ErrorMessage> : <Tip>{tip}</Tip>}
        </SelectContainer>
    );
};

export default Select;
