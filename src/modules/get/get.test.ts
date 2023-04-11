import { test, expect } from "vitest";
import { GET } from "./get";

test("GET - Fail Verify Cookie", async () => {
  const route: string = "http://localhost:3333/api/auth/verify_cookie";
  const hash: string = `hello`;
  const result = await GET({ route, hash });
  expect(result).toHaveProperty("message");
});
