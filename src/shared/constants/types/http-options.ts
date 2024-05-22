import { HttpMethod } from './http-method';

export type HttpOptions = {
    method: HttpMethod;
    payload: BodyInit | null;
    headers: Headers;
    withCredentials?: boolean;
};
