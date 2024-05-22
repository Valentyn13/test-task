import {
    ApiEndpoints,
    ContentType,
    GetPositionsResponseDto,
    HTTP,
    HttpApi,
    Storage,
} from '../../../shared';

type Constructor = {
    baseUrl: string;
    http: HTTP;
    storage: Storage;
};

export class RegisterFormApi extends HttpApi {
    constructor({ baseUrl, http, storage }: Constructor) {
        super({ baseUrl, http, storage });
    }

    public async getPositions() {
        const response = await this.load(
            this.getFullEndpoint(ApiEndpoints.POSITIONS),
            {
                method: 'GET',
                contentType: ContentType.JSON,
                hasAuth: false,
            },
        );

        return (await response.json()) as GetPositionsResponseDto;
    }
}
