import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    advantages: Yup.array().of(Yup.string().required('Обязательное поле')).required('Обязательное поле'),
    radio: Yup.number().required('Обязательное поле').typeError('Обязательное поле'),
    checkbox: Yup.array().of(Yup.number().required('Обязательное поле')).required('Обязательное поле'),
});
