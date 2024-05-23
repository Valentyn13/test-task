import { FC, useEffect } from 'react';

import {
    Button,
    HeaderText,
    PAGE_STEP,
    Preloader,
    ReducerState,
    START_PAGE,
    USERS_PER_PAGE,
} from '../../../shared';

import styles from './get-section.module.scss';
import useUserStore from '../model/users-store';
import { UserList } from '../../../entities/user/UI/user-list/user-list';

export const GetSection: FC = () => {
    const {
        users,
        page: currentPage,
        total_pages,
        state,
        getUsers,
    } = useUserStore();

    useEffect(() => {
        void getUsers({ page: START_PAGE, count: USERS_PER_PAGE });
    }, [getUsers]);

    const handleShowMoreClick = () => {
        void getUsers({ page: currentPage + PAGE_STEP, count: USERS_PER_PAGE });
    };

    return (
        <section className={styles.getSection}>
            <div className="container">
                <HeaderText className={styles.getSection__headerText}>
                    Working with GET request
                </HeaderText>

                {state === ReducerState.PENDING && (
                    <div className={styles.getSection__sideLayout}>
                        <Preloader />
                    </div>
                )}

                {state === ReducerState.ERROR && (
                    <div className={styles.getSection__sideLayout}>
                        <p className={styles.getSection__errorText}>
                            Ooops something went wrong
                        </p>
                    </div>
                )}
                {state === ReducerState.SUCCESS && (
                    <div className={styles.getSection__layout}>
                        <UserList users={users} />
                    </div>
                )}

                {currentPage !== total_pages && (
                    <Button
                        onClick={handleShowMoreClick}
                        className={styles.getSection__controll}
                    >
                        Show more
                    </Button>
                )}
            </div>
        </section>
    );
};
