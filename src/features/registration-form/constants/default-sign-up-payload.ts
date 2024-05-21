import { UserSignUpJoiDto } from '../../../shared/constants/types/user-sign-up-joi-request-dto';

export const DEFAULT_SIGN_UP_PAYLOAD: UserSignUpJoiDto = {
    name: '',
    email: '',
    phone: '',
};
