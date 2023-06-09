import React from 'react';
import {Button, Input, Label} from "../../components";
import {About, Avatar, Devider, SimpleLink, List, Name, Wrapper} from "./Main.styles";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate()
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
            <Devider/>
            <Label htmlFor='phone'>
                Номер телефона
                <Input placeholder='+7 999 999-99-99' value='+7 920 303-25-83' disabled={true} id='phone'/>
            </Label>
            <Label htmlFor='email'>
                Email
                <Input placeholder='example@example.com' value='bionixxxd5@gmail.com' disabled={true} id='email'/>
            </Label>
            <Button appearance='primary' onClick={() => navigate('/create')}>Начать</Button>
        </Wrapper>
    );
};

export default MainPage;
