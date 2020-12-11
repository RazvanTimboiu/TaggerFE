import * as qs from "qs";
import { PathLike } from "fs";

export const apiConfig = {
    baseURL: "http://localhost:8080/",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    },
    timeout: 30000,
    withCredentials: true,
    returnRejectedPromiseOnError: true,

    paramsSerializer: (params: PathLike) =>
        qs.stringify(params, { indices: false }),
};
