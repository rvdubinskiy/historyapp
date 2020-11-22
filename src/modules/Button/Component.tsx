import * as React from 'react';
import { cn } from '@bem-react/classname'

import './Button.css';

export const cnButton = cn('Button');

export interface IButtonProps {
    disabled?: boolean;
    classname?: string;
    children?: JSX.Element | React.ReactNode;
    onClick?: (event: React.MouseEvent) => void;
    style?: React.CSSProperties;
}

export const Button: React.FC<IButtonProps> = ({ ...props }): JSX.Element => {

    const { disabled = false, children, onClick, style, ...args } = props;

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => onClick && onClick(event);

    return (
        <button {...args} disabled={disabled} onClick={handleOnClick} className={cnButton()} style={style}>
            {children}
        </button>
    )
}