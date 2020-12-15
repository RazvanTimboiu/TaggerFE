import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { User } from "../domain/models/User";
import { Credentials } from "../domain/models/Credentials";
import Api from "./Api";
import { apiConfig } from "../config/axios/api.config";

export class UserApi extends Api {
    public constructor(config?: AxiosRequestConfig) {
        super(config);
        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param,
        }));

        this.api.interceptors.response.use((param: AxiosResponse) => ({
            ...param,
        }));

        this.login = this.login.bind(this);
    }

    public login(credentials: Credentials): Promise<User> {
        return this.post<User, Credentials>("/accounts/login", credentials);
    }
}

export const userApi = new UserApi(apiConfig);
