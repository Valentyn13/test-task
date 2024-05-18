import { FC } from 'react';
import styles from './radio-button.module.scss'
import clsx from 'clsx';

type RadioButtonProps = {
    label: string;
    checked?: boolean;
    className?: string;
}

export const RadioButton:FC<RadioButtonProps> = ({label = '', checked = false, className}) => {
    return (
        <label className={clsx(styles.container, className)}>
            <input
                type="radio"
                className={styles.radio}
                defaultChecked={checked}
            />
            <span className={styles.text}>{label}</span>
        </label>
    )
}