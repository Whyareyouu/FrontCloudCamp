export interface IFormStepFirst {
    nickname: string;
    name: string;
    sername: string;
    sex: {label: string, value: string}
}

export interface IFormStepSecond {
    advantages: string[];
    radio: number,
    checkbox: number[],
}