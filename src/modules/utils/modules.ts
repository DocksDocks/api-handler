import { getOptionsObject } from "@/types/modules";
import { RequestInit } from "node-fetch";

export function getOptions({
  method,
  cookie,
  credentials,
  payload,
}: getOptionsObject): RequestInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (cookie) {
    headers["cookie"] = cookie;
  }
  const options = {
    method,
    credentials: credentials ?? "include",
    headers,
  } as RequestInit;
  if (method === "POST" || method === "PUT") {
    options.body = JSON.stringify(payload);
  }
  return options;
}
