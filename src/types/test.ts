import { ApiHandler } from "..";

const basePath = "http://localhost:3333/api";
// const basePath = "https://actual_url.com";

export const apiHandler = new ApiHandler(basePath);
