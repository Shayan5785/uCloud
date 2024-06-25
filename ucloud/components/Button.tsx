'use client'

import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    handler?: () => any;
}

const Button: React.FC<IProp> = ({ type = "button", handler, className, children, ...rest }) => {
    return (
        <button type={type} className={`${className} rounded-md`} onClick={handler} {...rest}>
            {children}
        </button>
    );
}

export default Button;
