import React, {useState} from 'react';
import {Option, OptionsContainer, SelectButton, SelectContainer} from "./Select.style";
import {SelectProps, TOption} from "./Select.interface";

const Select: React.FC<SelectProps> = ({options, onChange, placeholder}): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<null | TOption>(null);
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
            <SelectButton onClick={handleToggleOptions} type='button' isOpen={isOpen}>
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
        </SelectContainer>
    );
};

export default Select;
