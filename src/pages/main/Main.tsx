import React from 'react';
import {Button, Input, Label} from "../../components";
import {About, Avatar, Divider, List, Name, SimpleLink, StyleForm, Wrapper} from "./Main.styles";
import {useNavigate} from "react-router-dom";
import InputMask from 'react-input-mask';
import {Controller, useForm} from 'react-hook-form'
import {IStartedForm} from "../../interfaces/Form.interface";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./validator";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {updateStartedForm} from "../../components/redux/slices/formSlice";

const MainPage = () => {
    const navigate = useNavigate()
    const formState = useAppSelector(state => state.FormSliceReducer)
    const dispatch = useAppDispatch()

    const {register, control, handleSubmit, formState: {errors}} = useForm<IStartedForm>({
        mode: "onBlur",
        resolver: yupResolver(validationSchema),
        defaultValues: {
            phone: formState.phone,
            email: formState.email
        }
    })


    const onSubmit = (formState: IStartedForm) => {
        dispatch(updateStartedForm(formState))
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
                        render={({field}) => (
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                alwaysShowMask={true}
                                value={field.value}
                                onChange={field.onChange}
                            >
                                <Input error={errors.phone} children={'Введите ваш номер'} id='phone'/>
                            </InputMask>
                        )}
                    />
                </Label>
                <Label htmlFor='email'>
                    Email
                    <Input placeholder='example@example.com' id='email' {...register('email')} error={errors.email}
                           children={'Введите вашу почту'}/>
                </Label>
                <Button appearance='primary' id='button-start'>Начать</Button>
            </StyleForm>
        </Wrapper>
    );
};

export default MainPage;
