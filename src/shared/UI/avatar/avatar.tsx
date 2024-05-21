import styles from './avatar.module.scss';
import defaultImage from './../../../assets/photo-cover.svg';

import { FC } from 'react';

type AvatarProps = {
    image?: string;
};

export const Avatar: FC<AvatarProps> = ({ image }) => {
    return (
        <div className={styles.avatar}>
            <img src={image || defaultImage} alt="avatar" />
        </div>
    );
};
