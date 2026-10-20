import http from "./http.js";

export const userLogin = (data) => http.post("/user/login", data);
