import fetch from "node-fetch";
import { getOptions } from "../utils/modules";
import { DEFAULT_GET_SETTINGS } from "@/types/modules";

export async function GET_CALL_ROUTE({
  cookie,
  route,
  payload,
  credentials,
  return_json = true,
}: DEFAULT_GET_SETTINGS) {
  const options = getOptions({ method: "GET", cookie, credentials, payload });
  const response = await fetch(route, options);
  if (!return_json) return response;
  const responseObject = await response.json();
  if (!payload || Object.keys(payload).length === 0) return responseObject;
  const pickedObject = Object.fromEntries(
    Object.entries(payload)
      .filter(([key]) => key in responseObject)
      .map(([key, value]) => [key, responseObject[key]])
  );
  return pickedObject;
}
