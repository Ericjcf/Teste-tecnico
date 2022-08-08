import axios from "axios";

const api = axios.create({
    baseURL: "https://teste8.flowcash.app/api",
})

export default api;