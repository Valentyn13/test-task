import {
    HTTP,
    HttpApi,
    ApiEndpoints,
    ContentType,
    Storage,
    GetTokenResponseDto,
} from '../../../shared';

type Constructor = {
    baseUrl: string;
    http: HTTP;
    storage: Storage;
};

export class TokenApi extends HttpApi {
    constructor({ baseUrl, http, storage }: Constructor) {
        super({ baseUrl, http, storage });
    }

    public async getToken() {
        const response = await this.load(
            this.getFullEndpoint(ApiEndpoints.TOKEN),
            {
                method: 'GET',
                contentType: ContentType.JSON,
                hasAuth: false,
            },
        );

        return (await response.json()) as GetTokenResponseDto;
    }
}
