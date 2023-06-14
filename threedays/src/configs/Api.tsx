import axios from "axios";
import { toast } from 'react-toastify';

const base_url = "https://dummyjson.com/"
export const client = axios.create({
    baseURL: base_url,
    timeout: 15000,
    headers: { token: "" },
})

client.interceptors.response.use((response) => response, (error) => 
{
    console.log('3', "3")
    toast.error(error.message)
    // throw error
});