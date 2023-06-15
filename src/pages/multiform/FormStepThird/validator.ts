import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    about: Yup.string()
        .required('Поле обязательно для заполнения')
        .test('200-letter', 'Максимальная длина символов 200', (value) =>
            value.replaceAll(' ', '').length <= 200
        ),
})