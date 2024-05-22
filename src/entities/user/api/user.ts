import { ORIGIN_URL, http, storage } from '../../../shared';
import { UserApi } from './user.api';

export const userApi = new UserApi({
    baseUrl: ORIGIN_URL,
    http: http,
    storage: storage,
});
