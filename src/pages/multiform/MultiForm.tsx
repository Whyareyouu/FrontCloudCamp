import React from 'react';
import {Input, Label} from "../../components";
import {useForm} from "react-hook-form";

const MultiForm = () => {
    const {register} = useForm()
    return (
        <form>
            <Label>
                Nickname
                <Input placeholder='Nickname' {...register('nickname')}/>
            </Label>
            <Label>
                Name
                <Input placeholder='Name' {...register('name')}/>
            </Label>
            <Label>
                Sername
                <Input placeholder='Surname' {...register('sername')}/>
            </Label>
            <Label>
                Sex
                <Input placeholder='Sex'/>
            </Label>
        </form>
    );
};

export default MultiForm;
