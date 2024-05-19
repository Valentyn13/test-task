import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import styles from "./input.module.scss";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  errorText?: string;
  className?: string;
  helperText?: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  hasError = false,
  helperText = "",
  errorText = "",
  label = "",
  className = "",
  onChange,
  ...otherProperties
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const onFocus = () => {
        setIsFocused(true)
    }
    const onBlur = () => {
        setIsFocused(false)
    }
  return (
    <div className={styles.wrapper}>
      <fieldset className={clsx(styles.fieldset,{
        [styles.fieldset__error]: hasError,
        [styles.labelExists]: label && isFocused,
      })}>
        <legend className={clsx({
            [styles.legend__focused]: isFocused,
            
        })}>{label}</legend>
        <input
          {...otherProperties}
          onChange={onChange}
         onFocus={onFocus}
         onBlur={onBlur}
          className={clsx(
            styles.input,

            className
          )}
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
};
