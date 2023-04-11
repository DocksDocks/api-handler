import { test, expect } from "vitest";
import { DELETE } from "./delete";

test("DELETE - Fail Verify Cookie", async () => {
  const route: string = "http://localhost:3333/api/user/1";
  const hash: string = `hello`;
  const result = await DELETE({ route, hash });
  expect(result).toHaveProperty("message");
});
