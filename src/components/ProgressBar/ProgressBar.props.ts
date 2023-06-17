import React from "react";

export interface ProgressBarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    currentStep: number;
}