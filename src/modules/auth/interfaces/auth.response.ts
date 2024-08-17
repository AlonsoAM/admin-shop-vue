import type {User} from "@/modules/auth/interfaces/user.interface";

export interface AuthResponse {
    user: User;
    token: string;
}