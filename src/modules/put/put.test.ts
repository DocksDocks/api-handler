import { expect, test } from "vitest";
import { ApiHandler } from "../..";

const basePath = "http://localhost:3333/api";
// const basePath = "https://actual_url.com";
const apiHandler = new ApiHandler(basePath);

test("PUT - SUCCESS - TEST", async () => {
  const id = "35c9dde5-bc82-40f4-bd95-4b73e7818714";
  const route: string = `/test/${id}`;
  const payload: Object = {
    name: "Tester",
  };
  const result = await apiHandler.PUT({ route, payload });
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("email");
  expect(result).toHaveProperty("name");
});

test("PUT - FAIL - TEST", async () => {
  const route: string = "/test";
  const payload: Object = {
    email: "test@email.com",
  };
  const result = await apiHandler.PUT({ route, payload });
  expect(result).toHaveProperty("error");
  expect(result).toHaveProperty("message");
});
