import { expect, test } from "vitest";
import { ApiHandler } from "../..";

const basePath = "http://localhost:3333";
// const basePath = "https://actual_url.com";
const apiHandler = new ApiHandler(basePath);

test("DELETE - FAIL - TEST", async () => {
  const route: string = "/api/test";
  const result = await apiHandler.DELETE({ route });
  expect(result).toHaveProperty("message");
  expect(result).toHaveProperty("error");
});
