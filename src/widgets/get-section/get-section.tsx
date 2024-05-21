import { FC } from 'react';

import { UserCard } from '../../entities';
import { Button, HeaderText, Positions, User } from '../../shared';

import styles from './get-section.module.scss';

const USER: User = {
    id: '1',
    name: 'John Doe',
    email: 'some@gmail.com',
    phone: '+380999999999',
    position: Positions.FRONTEND_DEVELOPER,
    position_id: '1',
    registration_timestamp: 123456789,
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
};

export const GetSection: FC = () => {
    return (
        <section className={styles.getSection}>
            <div className="container">
                <HeaderText className={styles.getSection__headerText}>
                    Working with GET request
                </HeaderText>

                <div className={styles.getSection__layout}>
                    <UserCard user={USER} />
                    <UserCard user={USER} />
                    <UserCard user={USER} />
                    <UserCard user={USER} />
                    <UserCard user={USER} />
                    <UserCard user={USER} />
                </div>

                <Button className={styles.getSection__controll}>
                    Show more
                </Button>
            </div>
        </section>
    );
};
