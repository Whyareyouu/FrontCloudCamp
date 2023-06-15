import React from 'react';
import {Button, Input, Label} from "../../components";
import {About, Avatar, Divider, SimpleLink, List, Name, Wrapper, StyleForm} from "./Main.styles";
import {useNavigate} from "react-router-dom";
import InputMask from 'react-input-mask';
import {useForm, Controller} from 'react-hook-form'
import {IStartedForm} from "../../interfaces/Form.interface";

const MainPage = () => {
    const navigate = useNavigate()
    const {register, control, handleSubmit} = useForm<IStartedForm>()

    const onSubmit = (formState: IStartedForm) => {
        console.log(formState)
        navigate('/create')
    }

    return (
        <Wrapper>
            <About>
                <Avatar/>
                <div>
                    <Name>Никита Чернов</Name>
                    <div>
                        <List>
                            <li><SimpleLink href='#' target='_blank'>Telegram</SimpleLink></li>
                            <li><SimpleLink href='#' target='_blank'>GitHub</SimpleLink></li>
                            <li><SimpleLink href='#' target='_blank'>Resume</SimpleLink></li>
                        </List>
                    </div>
                </div>
            </About>
            <Divider/>
            <StyleForm onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor='phone'>
                    Номер телефона
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true,
                        }}
                        render={({field}) => (
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                alwaysShowMask={true}
                                value={field.value}
                                onChange={field.onChange}
                            >
                                <Input/>
                            </InputMask>
                        )}
                    />
                </Label>
                <Label htmlFor='email'>
                    Email
                    <Input placeholder='example@example.com' value='bionixxxd5@gmail.com'
                           id='email' {...register('email')}/>
                </Label>
                <Button appearance='primary' id='button-start'>Начать</Button>
            </StyleForm>
        </Wrapper>
    );
};

export default MainPage;
