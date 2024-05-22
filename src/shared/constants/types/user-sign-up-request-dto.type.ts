import { Positions } from '../enums/positions.enum';

export type UserSignUpRequestDto = {
    name: string;
    email: string;
    phone: string;
    position: Positions;
    photo: File;
};
