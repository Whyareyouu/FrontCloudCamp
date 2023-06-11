import React from 'react';
import {Button, Checkbox, Input, Label} from "../../components";

const FormStepSecond = () => {
    return (
        <div>
            <Label>
                Advantages
                <Input/>
                <Button appearance='border' style={{fontSize: "24px"}}>+</Button>
            </Label>
            <Label gap={0}>
                Checkbox group
                <Checkbox name='checkbox' children='1' />
                <Checkbox name='checkbox' children='2' />
                <Checkbox name='checkbox' children='3' />
            </Label>
            <Label>
                Radio Group
                <Input type='radio'/>
                <Input type='radio'/>
                <Input type='radio'/>
            </Label>
        </div>
    );
};

export default FormStepSecond;
