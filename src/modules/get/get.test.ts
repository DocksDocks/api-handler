import { test, expect } from "vitest";
import { GET } from "./get";

test("GET_ALL - SUCCESS - TEST", async () => {
  const route: string = "http://localhost:3333/api/test";
  const hash: string = `hello`;
  const result = await GET({ route, hash }).then((res) => {
    return res.json();
  });
  expect(result).toBeTypeOf("object");
});

test("GET_BY_ID - SUCCESS - TEST", async () => {
  const route: string = "http://localhost:3333/api/test/1";
  const hash: string = `hello`;
  const result = await GET({ route, hash }).then((res) => {
    return res.json();
  });
  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("email");
  expect(result).toHaveProperty("name");
});
