import { FC } from 'react';

import { User } from '../../../../shared';
import { UserCard } from '../user-card/user-card';

type UserListProps = {
    users: User[];
};

export const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <>
            {users.map((user) => {
                return <UserCard key={user.id} user={user} />;
            })}
        </>
    );
};
