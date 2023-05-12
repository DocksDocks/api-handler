import fetch from "node-fetch";
import { Payload, ResponseObject } from "../../constants";

export async function POST_CALL_ROUTE(settings: typeof DEFAULT_POST_SETTINGS) {
  try {
    settings = Object.assign({}, DEFAULT_POST_SETTINGS, settings);
    const options = {
      method: "POST",
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
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const DEFAULT_POST_SETTINGS: {
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
