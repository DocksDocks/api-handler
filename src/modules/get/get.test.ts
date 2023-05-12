import { expect, test } from "vitest";
import { apiHandler } from "../../types/test";

test("GET_ALL - SUCCESS - TEST", async () => {
  const route: string = "/test";
  const result = await apiHandler.GET({ route });
  expect(result).toBeTypeOf("object");
});

test("GET_BY_ID - SUCCESS - TEST", async () => {
  const id = "35c9dde5-bc82-40f4-bd95-4b73e7818714";
  const route: string = `/test/${id}`;
  const result = await apiHandler.GET({ route });
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("email");
  expect(result).toHaveProperty("name");
});
