import { FC } from 'react'

import styles from './header-text.module.scss'
import clsx from 'clsx'

type HeaderTextProps = {
    children: string
    className?: string
}

export const HeaderText: FC<HeaderTextProps> = ({ children, className = '' }) => {
    return (
        <h2 className={clsx(styles.text, className)}>{children}</h2>
    )
}