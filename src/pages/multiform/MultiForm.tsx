import React, {useState} from 'react';
import FormStepFirst from "./FormStepFirst";
import FormStepSecond from "./FormStepSecond/FormStepSecond";
import MainLayout from "../../Layout/main/MainLayout";


const MultiForm = () => {
    const [step, setStep] = useState<number>(2)

    const handleNextPage = () => {
        if (step === 3) return
        setStep(step + 1)
    }

    const handlePrevPage = () => {
        if (step === 1) return
        setStep(step - 1)
    }

    switch (step) {
        case 1:
            return <FormStepFirst/>

        case 2:
            return <FormStepSecond/>
        default:
            return <FormStepFirst/>
    }

};

export default MultiForm;
