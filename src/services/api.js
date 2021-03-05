import axios from "axios"

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
})

api.defaults.headers.common["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQ2FpbyBBdWd1c3RvIiwiaWF0IjoxNjE0OTcxOTIxLCJleHAiOjE2MTQ5NzU1MjF9.mEOlM6z3ZbRyXtUUPdwwHImf90ftmW3zo__6t84OTUY`;

export { api }