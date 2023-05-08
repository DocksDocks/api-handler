import { expect, test } from "vitest";
import { ApiHandler } from "../..";

const basePath = "http://localhost:3333";
// const basePath = "https://actual_url.com";
const hash: string = `hello`;
const apiHandler = new ApiHandler(hash, basePath);

test("GET_ALL - SUCCESS - TEST", async () => {
  const route: string = "/api/test";
  const result = await apiHandler.GET({ route, hash });
  expect(result).toBeTypeOf("object");
});

test("GET_BY_ID - SUCCESS - TEST", async () => {
  const id = "35c9dde5-bc82-40f4-bd95-4b73e7818714";
  const route: string = `/api/test/${id}`;
  const result = await apiHandler.GET({ route, hash });
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("email");
  expect(result).toHaveProperty("name");
});
