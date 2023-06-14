import React from "react";

export type TOption = {
    value: string;
    label: string;
}

export interface SelectProps {
    options: TOption[];
    onChange: (option: TOption) => void;
    placeholder: string;
}
