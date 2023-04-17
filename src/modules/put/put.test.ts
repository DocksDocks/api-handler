import { test, expect } from "vitest";
import { PUT } from "./put";

test("PUT - SUCCESS - TEST", async () => {
  const route: string = "http://localhost:3333/api/test/1";
  const payload: Object = {
    name: "Tester",
  };
  const hash: string = `hello`;
  const result = await PUT({ route, payload, hash }).then((res) => { return (res.json())});
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("email");
  expect(result).toHaveProperty("name");
});

test("PUT - FAIL - TEST", async () => {
  const route: string = "http://localhost:3333/api/test/1";
  const payload: Object = {
    email: "test@email.com",
  };
  const hash: string = `hello`;
  const result = await PUT({ route, payload, hash }).then((res) => { return (res.json())});
  expect(result).toHaveProperty("error");
  expect(result).toHaveProperty("message");
})
