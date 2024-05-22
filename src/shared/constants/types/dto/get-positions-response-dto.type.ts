type Position = {
    id: number;
    name: string;
};

export type GetPositionsResponseDto = {
    success: boolean;
    positions: Position[];
};
