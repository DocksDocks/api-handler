import fetch from "node-fetch";
import { Payload, ResponseObject } from "../../constants";

export async function PUT_CALL_ROUTE(settings: typeof DEFAULT_PUT_SETTINGS) {
  settings = Object.assign({}, DEFAULT_PUT_SETTINGS, settings);
  const options = {
    method: "PUT",
    credentials: settings.credentials ?? "include",
    headers: {
      "Content-Type": "application/json",
      cookie: settings.cookie!,
    },
    body: JSON.stringify(settings.payload),
  };
  // Make API request and get response object
  const response = await fetch(settings.route, options);
  if (!settings.return_json) return response;
  const responseObject: ResponseObject = await response.json();
  return responseObject;
}

export const DEFAULT_PUT_SETTINGS: {
  cookie?: string;
  route: string;
  payload: Payload;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
} = {
  cookie: "",
  route: "",
  payload: {},
  credentials: "include",
  return_json: true,
};
