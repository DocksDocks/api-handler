import { DEFAULT_PUT_SETTINGS } from "@/types/modules";
import fetch from "node-fetch";
import { getOptions } from "../utils/modules";

export async function PUT_CALL_ROUTE({
  cookie,
  route,
  payload,
  credentials,
  return_json = true,
}: DEFAULT_PUT_SETTINGS) {
  const options = getOptions({ method: "PUT", cookie, credentials, payload });
  const response = await fetch(route, options);
  if (!return_json) return response;
  const responseObject = await response.json();
  return responseObject;
}
