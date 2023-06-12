export interface IFormStepFirst {
    nickname: string;
    name: string;
    sername: string;
    sex: 'man' | 'woman' | ''
}

export interface IFormStepSecond {
    advantages: string[];
    radio: string,
    checkbox: string[],
}