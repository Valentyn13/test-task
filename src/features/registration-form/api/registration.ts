import { ORIGIN_URL, http, storage } from '../../../shared';
import { RegisterFormApi } from './register-form.api';

export const registrationFormApi = new RegisterFormApi({
    baseUrl: ORIGIN_URL,
    http: http,
    storage: storage,
});
