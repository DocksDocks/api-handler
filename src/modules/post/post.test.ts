import { expect, test } from "vitest";
import { apiHandler } from "../../types/test";

test("POST - SUCCESS - TEST", async () => {
  const route: string = "/test";
  let email = (Math.random() + 1).toString(36).substring(7);
  let password = (Math.random() + 1).toString(36).substring(2);
  const payload: Object = {
    name: "Test",
    email: email + "@email.com",
    password: password + "test123",
  };
  const result = await apiHandler.POST({ route, payload });
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("email");
  expect(result).toHaveProperty("name");
});

test("POST - FAIL - TEST", async () => {
  const route: string = "/test";
  const payload: Object = {
    email: "test@email.com",
    password: "test123",
  };
  const result = await apiHandler.POST({ route, payload });
  expect(result).toHaveProperty("error");
  expect(result).toHaveProperty("message");
});
