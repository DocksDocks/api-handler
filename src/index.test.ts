import { test, expect } from "vitest";
import { GET, POST } from "./modules";

test("TEST - Success Login - POST", async () => {
  const route: string = "http://localhost:3333/api/auth/generate_access_token";
  const payload: Object = {
    email: "test@email.com",
    password: "test123",
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

test("GET - Success Verify Cookie", async () => {
  const route: string = "http://localhost:3333/api/auth/verify_cookie";
  const result = await GET({ route, hash: "hello" });
});

test("GET - Fail Verify Cookie", async () => {
  const route: string = "http://localhost:3333/api/auth/verify_cookie";
  const result = await GET({ route, hash: "hello" });
  expect(result).toHaveProperty("message");
  expect(result.message).toEqual("Cookies expired, please log in again!");
});
