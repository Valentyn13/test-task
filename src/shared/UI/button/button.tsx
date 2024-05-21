import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react';

import { ButtonTypes } from '../../constants/enums/button-enum';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    disabled?: boolean;
    variant?: ButtonTypes;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export const Button: FC<ButtonProps> = ({
    children,
    disabled = false,
    variant = ButtonTypes.YELLOW,
    onClick,
    className = '',
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                {
                    [styles.button__yellow]:
                        variant === ButtonTypes.YELLOW && !disabled,
                    [styles.button__blue]: variant === ButtonTypes.BLUE,
                    [styles.button__disabled]: disabled,
                },
                className,
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
