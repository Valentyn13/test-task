import { FC } from 'react';
import { HeaderText } from '../../shared/UI/header-text/header-text';
import { Button, User } from '../../shared';

import styles from './get-section.module.scss';
import { UserCard } from '../../entities/user-card/user-card';
import { Positions } from '../../shared/constants/enums/positions-enum';

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
