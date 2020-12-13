import { Role } from "../enums/Role";

export interface User {
    jwt?: string;
    id?: number;
    role?: Role;
    expirationDate?: Date;
}
