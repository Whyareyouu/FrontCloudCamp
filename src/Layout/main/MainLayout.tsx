import React from 'react';
import {Container, Wrapper} from "./MainLayout.styles";

const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({children}): React.JSX.Element => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
};

export default MainLayout;
