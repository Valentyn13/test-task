import { Positions } from "../enums/positions-enum";

export type User = {
    id: string,
    name: string,
    email: string,
    phone: string,
    position: Positions,
    position_id: string,
    registration_timestamp: number,
    photo: string,
}