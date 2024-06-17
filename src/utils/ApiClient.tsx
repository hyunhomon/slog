import axios from "axios";
import { baseUrl } from "../consts/Consts";

const ApiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default ApiClient;