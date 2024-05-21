import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './radio-button.module.scss';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ label = '', className = '', ...otherProperties }, reference) => (
        <label className={clsx(styles.container, className)}>
            <input
                {...otherProperties}
                type="radio"
                ref={reference}
                className={styles.radio}
            />
            <span className={styles.text}>{label}</span>
        </label>
    ),
);

RadioButton.displayName = 'RadioButton';

export { RadioButton };
