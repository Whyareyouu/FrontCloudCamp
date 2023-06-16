import React  from 'react';
import {Container, Wrapper} from "./MainLayout.styles";
import {Outlet} from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {useAppSelector} from "../../hooks/redux-hooks";

const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({children}): React.JSX.Element => {
    const step = useAppSelector(state => state.stepSliceReducer)
    return (
        <Wrapper>
            <Container>
                <ProgressBar currentStep={step}/>
                <Outlet />
                {children}
            </Container>
        </Wrapper>
    );
};

export default MainLayout;
