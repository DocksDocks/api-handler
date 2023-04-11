import { test, expect } from "vitest";
import { PUT } from "./put";

test("PUT - Fail Verify Cookie", async () => {
  const route: string = "http://localhost:3333/api/user/1";
  const payload = {};
  const hash: string = `hello`;
  const result = await PUT({ route, payload, hash });
  expect(result).toHaveProperty("message");
});
