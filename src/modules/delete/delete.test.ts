import { expect, test } from "vitest";
import { apiHandler } from "../../types/test";

test("DELETE - FAIL - TEST", async () => {
  const route: string = "/api/test";
  const result = await apiHandler.DELETE({ route });
  expect(result).toHaveProperty("message");
  expect(result).toHaveProperty("error");
});
