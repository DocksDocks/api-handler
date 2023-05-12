import fetch from "node-fetch";
import { getOptions } from "../utils/modules";
import { DEFAULT_DELETE_SETTINGS } from "@/types/modules";

export async function DELETE_CALL_ROUTE({
  cookie,
  route,
  credentials,
  return_json = true,
}: DEFAULT_DELETE_SETTINGS) {
  const options = getOptions({ method: "DELETE", cookie, credentials });
  const response = await fetch(route, options);
  if (!return_json) return response;
  const responseObject = await response.json();
  return responseObject;
}
