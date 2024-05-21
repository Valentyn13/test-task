import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from 'react';
import styles from './input.module.scss';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
    errorText?: string;
    className?: string;
    helperText?: string;
    label?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            hasError = false,
            helperText = '',
            errorText = '',
            label = '',
            className = '',
            onChange,
            ...otherProperties
        },
        reference,
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const onFocus = () => {
            setIsFocused(true);
        };
        const onBlur = () => {
            setIsFocused(false);
        };

        return (
            <div className={clsx(styles.wrapper, className)}>
                <fieldset
                    className={clsx(styles.fieldset, {
                        [styles.fieldset__error]: hasError,
                        [styles.labelExists]: label && isFocused,
                    })}
                >
                    <legend
                        className={clsx(styles.legend,{
                            [styles.legend__focused]: isFocused,
                        })}
                    >
                        {label}
                    </legend>
                    <input
                        {...otherProperties}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        ref={reference}
                        className={clsx(styles.input)}
                    />
                </fieldset>
                <p
                    className={clsx(styles.helperText, {
                        [styles.helperText__error]: hasError,
                    })}
                >
                    {helperText || errorText}
                </p>
            </div>
        );
    },
);

Input.displayName = 'Input';

export { Input };
