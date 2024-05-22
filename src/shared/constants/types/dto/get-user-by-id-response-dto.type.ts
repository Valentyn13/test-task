import { User } from '../user.type';

export type GetUserByIdResponseDto = {
    success: boolean;
    user: User;
};
