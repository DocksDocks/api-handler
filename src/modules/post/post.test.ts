import { test, expect } from "vitest";
import { POST } from "./post";

test("POST - SUCCESS - TEST", async () => {
  const route: string = "http://localhost:3333/api/test";
  let email = (Math.random() + 1).toString(36).substring(7);
  let password = (Math.random() + 1).toString(36).substring(2);
  const payload: Object = {
    name: "Test",
    email: email + "@email.com",
    password: password + "test123",
  };
  const hash: string = `hello`;
  const result = await POST({ route, payload, hash }).then((res) => {
    return res.json();
  });
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("email");
  expect(result).toHaveProperty("name");
});

test("POST - FAIL - TEST", async () => {
  const route: string = "http://localhost:3333/api/test";
  const payload: Object = {
    email: "test@email.com",
    password: "test123",
  };
  const hash: string = `hello`;
  const result = await POST({ route, payload, hash }).then((res) => {
    return res.json();
  });
  expect(result).toHaveProperty("error");
  expect(result).toHaveProperty("message");
});
