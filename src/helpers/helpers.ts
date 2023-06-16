import {IFormData} from "../interfaces/FormData.interface";
import {MultiFormState} from "../interfaces/MultiForm.interface";

export function convertToValidData (formData: MultiFormState): IFormData{
    return {
        nickname: formData.nickname,
        name: formData.name,
        sername: formData.sername,
        phone: formData.phone,
        email: formData.email,
        sex: formData.sex.value as 'man' | 'woman',
        advantages: formData.advantages.map(advantage => advantage.advantages),
        radio: +formData.radio,
        checkbox: formData.checkbox.map(value=> +value),
        about: formData.about
    }
}