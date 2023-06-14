export interface MultiFormState {
    nickname: string,
    name: string,
    sername: string,
    phone: string,
    email: string,
    sex: {label: string, value: string},
    advantages: string[],
    radio: number,
    checkbox: number[],
    about: string;
}