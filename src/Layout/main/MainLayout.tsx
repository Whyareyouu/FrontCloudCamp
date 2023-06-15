import React from 'react';
import {Container, Wrapper} from "./MainLayout.styles";
import {Outlet} from "react-router-dom";

const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({children}): React.JSX.Element => {
    return (
        <Wrapper>
            <Container>
                <Outlet />
                {children}
            </Container>
        </Wrapper>
    );
};

export default MainLayout;
