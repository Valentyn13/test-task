import clsx from 'clsx';
import { FC } from 'react';

import styles from './preloader.module.scss';

type PreloaderProps = {
    className?: string;
};

export const Preloader: FC<PreloaderProps> = ({ className = '' }) => {
    return (
        <div className={clsx(styles.preloader, className)}>
            <span className={styles.preloader__spiner}></span>
        </div>
    );
};
