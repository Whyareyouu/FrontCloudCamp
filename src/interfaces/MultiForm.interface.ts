export interface MultiFormState {
    nickname: string,
    name: string,
    sername: string,
    phone: string,
    email: string,
    sex: {label: string, value: string},
    advantages: Advantages[],
    radio: number | string,
    checkbox: number[],
    about: string;
}
type Advantages = {
    advantages: string
}