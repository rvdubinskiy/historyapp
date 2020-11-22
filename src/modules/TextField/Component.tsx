import * as React from 'react';
import { cn } from '@bem-react/classname';

import './TextField.css';

export const cnTextField = cn('TextField');


export interface ITextFieldProps {
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: JSX.Element | React.ReactNode;
    classname?: string;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

export const TextField: React.FC<ITextFieldProps> = ({...props}): JSX.Element => {

    const { 
        children, 
        onClick, 
        onChange,
        value,
        style, 
        placeholder, 
        ...args 
    } = props;

    const handleOnClick = (event: React.MouseEvent<HTMLInputElement>) => onClick && onClick(event); 
    const hangeleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(event); 

    return (
        <input 
            {...args} 
            placeholder={placeholder} 
            onClick={handleOnClick} 
            onChange={hangeleOnChange}
            value={value}
            style={style} 
            className={cnTextField()}
        >
            {children}
        </input>
    )
}