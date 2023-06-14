import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    advantages: Yup.array().of(Yup.string().required('Обязательное поле')).required('Обязательное поле'),
    radio: Yup.number().required('Обязательное поле').test('not-zero', 'Обязательное поле', (value) => value !== 0).typeError('Обязательное поле'),
    checkbox: Yup.array().of(Yup.number().required('Обязательное поле')).min(1, 'Выберите хотя бы один вариант').required('Обязательное поле'),
});
