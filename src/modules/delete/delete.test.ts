import { test, expect } from "vitest";
import { DELETE } from "./delete";

test("DELETE - FAIL - TEST", async () => {
  const route: string = "http://localhost:3333/api/test/9999";
  const hash: string = `hello`;
  const result = await DELETE({ route, hash }).then((res) => { return (res.json())});
  expect(result).toHaveProperty("message");
  expect(result).toHaveProperty("error");
});
