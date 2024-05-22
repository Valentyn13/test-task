import { User } from '../user.type';

export type GetUsersResponseDto = {
    success: boolean;
    total_pages: number;
    total_users: number;
    count: number;
    page: number;
    links: {
        next_url: string;
        prev_url: string;
    };
    users: User[];
};
