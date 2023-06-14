import { client } from "../configs/Api";
import { Jwt } from "../models/Jwt";

export const login = ( jwt: Jwt ) => {
    return client.post<Jwt>("auth/login", jwt)
}