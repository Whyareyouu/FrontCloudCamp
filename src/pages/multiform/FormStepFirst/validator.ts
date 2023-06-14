import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    nickname: Yup.string()
        .max(30, 'Nickname не должен быть больше 30 символов')
        .matches(/^\w+$/, 'Nickname может состоять из только из букв и цифр')
        .required('Обязательное поле'),
    name: Yup.string()
        .max(50, 'Имя не должно быть более 50 символов')
        .matches(/^[A-Za-zА-Яа-я]+$/, 'Имя должно состоять только из букв')
        .required('Обязательное поле'),
    sername: Yup.string()
        .max(50, 'Фамилия не должна быть более 50 символов')
        .matches(/^[A-Za-zА-Яа-я]+$/, 'Фамилия должна состоять только из букв')
        .required('Обязательно поле'),
    sex: Yup.object().shape({
        label: Yup.string().required('Выберите ваш пол'),
        value: Yup.string().required('Выберите ваш пол')
    }),
});