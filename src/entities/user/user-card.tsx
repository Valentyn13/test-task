import { FC } from 'react';

import { User, Avatar } from '../../shared/index.ts';

import styles from './user-card.module.scss';

type UserCardProps = {
    user: User;
};

export const UserCard: FC<UserCardProps> = ({
    user: { name, position, email, phone, photo },
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <Avatar image={photo} />
                <p className={styles.user__name}>{name}</p>

                <div>
                    <p className={styles.user__info}>{position}</p>
                    <p className={styles.user__info}>{email}</p>
                    <p className={styles.user__info}>{phone}</p>
                </div>
            </div>
        </div>
    );
};
