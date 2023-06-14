import { client } from "../configs/Api";
import { Jwt } from "../models/Jwt";
import { Product } from "../models/Product";
import { Products } from "../models/Products";

export const login = ( jwt: Jwt ) => {
    return client.post<Jwt>("auth/login", jwt)
}

export const productSave = ( product:Product ) => {
    return client.post<Product>("products/add", product)
}

export const allProduct = () => {
    return client.get<Products>("products")
}

