import {
    ApiEndpoints,
    ContentType,
    GetUsersResponseDto,
    HTTP,
    HttpApi,
    Storage,
} from '../../../shared';
import { GetUserByIdResponseDto } from '../../../shared/constants/types/dto/get-user-by-id-response-dto.type';

type Constructor = {
    baseUrl: string;
    http: HTTP;
    storage: Storage;
};

export class UserApi extends HttpApi {
    constructor({ baseUrl, http, storage }: Constructor) {
        super({ baseUrl, http, storage });
    }

    public async getUserById(id: number) {
        const response = await this.load(
            this.getFullEndpoint(`${ApiEndpoints.USERS}/${id}`),
            {
                method: 'GET',
                contentType: ContentType.JSON,
                hasAuth: false,
            },
        );

        return (await response.json()) as GetUserByIdResponseDto;
    }

    public async getUsers({ page, count }: { page: number; count: number }) {
        const response = await this.load(
            this.getFullEndpoint(
                `${ApiEndpoints.USERS}?page=${page}&count=${count}`,
            ),
            {
                method: 'GET',
                contentType: ContentType.JSON,
                hasAuth: false,
            },
        );

        return (await response.json()) as GetUsersResponseDto;
    }
}
