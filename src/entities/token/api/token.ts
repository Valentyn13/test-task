import { ORIGIN_URL, http, storage } from '../../../shared';
import { TokenApi } from './token.api';

export const tokenApi = new TokenApi({
    baseUrl: ORIGIN_URL,
    http: http,
    storage: storage,
});
