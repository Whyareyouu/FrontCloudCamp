import React from 'react';
import {Container, Wrapper} from "./MainLayout.styles";
import {Outlet} from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({children}): React.JSX.Element => {
    return (
        <Wrapper>
            <Container>
                <ProgressBar currentStep={3}/>
                <Outlet />
                {children}
            </Container>
        </Wrapper>
    );
};

export default MainLayout;
