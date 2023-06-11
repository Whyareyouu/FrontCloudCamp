import React from 'react';
import {Button, Checkbox, Input, Label} from "../../components";
import RadioButton from "../../components/RadioButton/RadioButton";

const FormStepSecond = () => {
    return (
        <div>
            <Label>
                Advantages
                <Input/>
                <Button appearance='border' style={{fontSize: "24px"}}>+</Button>
            </Label>
            <Label gap={2}>
                Checkbox group
                <Checkbox name='checkbox' children='1'/>
                <Checkbox name='checkbox' children='2'/>
                <Checkbox name='checkbox' children='3'/>
            </Label>
            <Label gap={2}>
                Radio Group
                <RadioButton name='radio' children='1'/>
                <RadioButton name='radio' children='2'/>
                <RadioButton name='radio' children='3'/>
            </Label>
        </div>
    );
};

export default FormStepSecond;
