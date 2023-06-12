import React from 'react';
import {Button, Label} from "../../../components";
import Textarea from "../../../components/Textarea/Textarea";

const FormStepThird = () => {
    return (
        <div>
            <Label>
                About
                <Textarea />
            </Label>
            <Button appearance='border'>Назад</Button>
            <Button appearance='primary'>Отправить</Button>
        </div>
    );
};

export default FormStepThird;
