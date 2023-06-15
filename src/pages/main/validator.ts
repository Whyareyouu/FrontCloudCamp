import * as Yup from 'yup'

const phoneRegExp = /^(\+\d{1,3}\s?)?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
const emailRegExp = /\S*@[a-zA-Z]*\.[a-zA-Z]/g

export const validationSchema = Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, 'Некорректный номер телефона').required('Введите номер телефона'),
    email: Yup.string().matches(emailRegExp, 'Неккоретно введена почта').required("Введите адрес электронной почты")
})