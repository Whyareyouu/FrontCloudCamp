import {DetailedHTMLProps, LabelHTMLAttributes} from "react";

export interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>{
    direction?: 'column' | 'row';
    gap?: number;
}