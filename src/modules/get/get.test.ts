import { test, expect } from "vitest";
import { GET } from "./get";

test("GET - Success Verify Cookie", async () => {
    const route: string = "http://localhost:3333/api/auth/verify_cookie";
    const result = await GET({ route, hash: "hello" });
});

test("GET - Fail Verify Cookie", async () => {
    const route: string = "http://localhost:3333/api/auth/verify_cookie";
    const result = await GET({ route, hash: "hello" });
    expect(result).toHaveProperty("message");
});
