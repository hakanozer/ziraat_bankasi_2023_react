import axios from "axios";

const base_url = "https://dummyjson.com/"
export const client = axios.create({
    baseURL: base_url,
    timeout: 15000,
    headers: { token: "" },
}) 