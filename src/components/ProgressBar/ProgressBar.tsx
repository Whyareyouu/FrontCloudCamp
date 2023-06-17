import React from 'react';
import {CircleContainer, Container, Line, StepCircle, StyledSpan} from "./ProgressBar.styles";
import {ProgressBarProps} from "./ProgressBar.props";
import CurrentIcon from "./CurrentIcon";
import ReadyIcon from "./ReadyIcon";


const ProgressBar = ({currentStep}: ProgressBarProps): React.JSX.Element => {
    return (
        <Container>
            <CircleContainer>
                <StepCircle active={currentStep >= 1}>{currentStep === 1 ? <CurrentIcon/> : currentStep >= 1 ?
                    <ReadyIcon/> : null}</StepCircle>
                <StyledSpan active={currentStep >= 1}>1</StyledSpan>
            </CircleContainer>
            <Line active={currentStep > 1}/>
            <CircleContainer>
                <StepCircle active={currentStep >= 2}>{currentStep === 2 ? <CurrentIcon/> : currentStep >= 2 ?
                    <ReadyIcon/> : null}</StepCircle>
                <StyledSpan active={currentStep >= 2}>2</StyledSpan>
            </CircleContainer>
            <Line active={currentStep > 2}/>
            <CircleContainer>
                <StepCircle active={currentStep >= 3}>{currentStep === 3 ? <CurrentIcon/> : currentStep >= 3 ?
                    <ReadyIcon/> : null}</StepCircle>
                <StyledSpan active={currentStep >= 3}>3</StyledSpan>
            </CircleContainer>
        </Container>
    );
};

export default ProgressBar;