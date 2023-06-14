import React from "react";
import {FieldError} from "react-hook-form";

export type TOption = {
    value: string;
    label: string;
}

export interface SelectProps {
    options: TOption[];
    onChange: (option: TOption) => void;
    placeholder: string;
    error?: FieldError;
    tip?: string;
}
