import { test, expect } from "vitest";
import { POST } from "./post";

test("TEST - Success Login - POST", async () => {
  const route: string = "http://localhost:3333/api/auth/generate_access_token";
  const payload: Object = {
    email: "teste123@email.com",
    password: "teste123",
  };
  const hash: string = `hello`;
  const result = await POST({ route, payload, hash });
  expect(result).toHaveProperty("name");
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("iat");
  expect(result).toHaveProperty("exp");
});

test("TEST - Fail Login - POST", async () => {
  const route: string = "http://localhost:3333/api/auth/generate_access_token";
  const payload: Object = {
    email: "test@email.com",
    password: "test12",
  };
  const hash: string = `hello`;
  const result = await POST({ route, payload, hash });
  expect(result).toHaveProperty("message");
});
