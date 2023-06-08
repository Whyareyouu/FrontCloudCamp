import React from 'react';
import {Button, Input, Label} from "../../components";
import {Link, List, Name, Wrapper} from "./Main.styles";

const MainPage = () => {
    return (
        <Wrapper>
            <div>
                <img src="" alt=""/>
                <div>
                    <Name>Никита Чернов</Name>
                    <div>
                        <List>
                            <li><Link href='#' target='_blank'>Telegram</Link></li>
                            <li><Link href='#' target='_blank'>GitHub</Link></li>
                            <li><Link href='#' target='_blank'>Resume</Link></li>
                        </List>
                    </div>
                </div>
            </div>
            <Label htmlFor='phone'>
                Номер телефона
                <Input placeholder='+7 999 999-99-99' value='7 920 303-25-83' disabled={true} id='phone'/>
            </Label>
            <Label htmlFor='email'>
                Email
                <Input placeholder='example@example.com' value='bionixxxd5@gmail.com' disabled={true} id='email'/>
            </Label>
            <Button appearance='primary'>Начать</Button>
        </Wrapper>
    );
};

export default MainPage;
