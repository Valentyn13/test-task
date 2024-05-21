import { FC } from 'react';
import clsx from 'clsx';

import styles from './avatar.module.scss';
import defaultImage from './../../../assets/photo-cover.svg';

type AvatarProps = {
    image?: string;
    className?: string;
};

export const Avatar: FC<AvatarProps> = ({ image, className = '' }) => {
    return (
        <div className={clsx(styles.avatar, className)}>
            <img src={image || defaultImage} alt="avatar" />
        </div>
    );
};
