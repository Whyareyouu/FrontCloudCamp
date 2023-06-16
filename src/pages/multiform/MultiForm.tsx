import React, {useState} from 'react';
import FormStepFirst from "./FormStepFirst/FormStepFirst";
import FormStepSecond from "./FormStepSecond/FormStepSecond";
import FormStepThird from "./FormStepThird/FormStepThird";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setNextStep, setPrevStep} from "../../redux/slices/stepSlice";

const MultiForm: React.FC<React.HTMLProps<HTMLFormElement>> = () => {
    const [step, setStep] = useState<number>(1)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleNextPage = () => {
        if (step === 3) return
        setStep(step + 1)
        dispatch(setNextStep())
    }

    const handlePrevPage = () => {
        if (step === 1) {
            navigate('/')
            return
        }
        setStep(step - 1)
        dispatch(setPrevStep())
    }

    switch (step) {
        case 1:
            return <FormStepFirst onNext={handleNextPage} onPrev={handlePrevPage}/>
        case 2:
            return <FormStepSecond onNext={handleNextPage} onPrev={handlePrevPage}/>
        case 3:
            return <FormStepThird onNext={handleNextPage} onPrev={handlePrevPage}/>
        default:
            return <FormStepFirst onNext={handleNextPage} onPrev={handlePrevPage}/>
    }

};

export default MultiForm;
