import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode } from "react";

import { ButtonTypes } from "../../constants/enums/button-enum";

import styles from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type?: ButtonTypes;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  type = ButtonTypes.YELLOW,
  onClick,
  className = '',
}) => {
  return <button
  className={clsx(styles.button,{
    [styles.button__yellow]: type === ButtonTypes.YELLOW && !disabled,
    [styles.button__blue]: type === ButtonTypes.BLUE,
    [styles.button__disabled]: disabled,
  }, className)}
    disabled={disabled}
    onClick={onClick}
  >{children}</button>;
};
