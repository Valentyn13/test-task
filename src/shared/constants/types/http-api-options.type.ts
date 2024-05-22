import { ContentType } from '../enums/content-type.enum';
import { HttpOptions } from './http-options.type';
import { ValueOf } from './valueOf.type';

export type HttpApiOptions = Omit<HttpOptions, 'headers' | 'payload'> & {
    hasAuth: boolean;
    contentType: ValueOf<typeof ContentType>;
    payload?: HttpOptions['payload'];
    withCredentials?: boolean;
};
