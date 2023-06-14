import React, {useState} from 'react';
import FormStepFirst from "./FormStepFirst/FormStepFirst";
import FormStepSecond from "./FormStepSecond/FormStepSecond";
import FormStepThird from "./FormStepThird/FormStepThird";


const MultiForm = () => {
    const [step, setStep] = useState<number>(1)

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
        case 3:
            return <FormStepThird/>
        default:
            return <FormStepFirst/>
    }

};

export default MultiForm;
