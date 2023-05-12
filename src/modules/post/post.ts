import { DEFAULT_POST_SETTINGS } from "@/types/modules";
import fetch from "node-fetch";
import { getOptions } from "../utils/modules";

export async function POST_CALL_ROUTE({
  cookie,
  route,
  payload,
  credentials,
  return_json = true,
}: DEFAULT_POST_SETTINGS) {
  const options = getOptions({ method: "POST", cookie, credentials, payload });
  const response = await fetch(route, options);
  if (!return_json) return response;
  const responseObject = await response.json();
  return responseObject;
}
