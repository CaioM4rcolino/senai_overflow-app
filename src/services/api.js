import axios from "axios"

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
})

api.defaults.headers.common["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQ2FpbyBBdWd1c3RvIiwiaWF0IjoxNjE1MjMyMTc1LCJleHAiOjE2MTUyMzU3NzV9.FVutBs7YAG00vy2G8b8MTXawCZuJIColddF0K0GM69A`;

export { api }