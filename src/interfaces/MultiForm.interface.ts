export interface MultiFormState {
    nickname: string,
    name: string,
    sername: string,
    phone: string,
    email: string,
    sex: 'man' | 'woman' | '',
    advantages: string[],
    radio: number,
    checkbox: number[],
    about: string;
}