import fetch from "node-fetch";
import { Payload, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";

export async function PUT(settings: typeof PUT_SETTINGS) {
  try {
    HASH_DECODE(settings.hash);
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
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const PUT_SETTINGS: {
  cookie?: string;
  route: string;
  payload: Payload;
  hash: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
} = {
  cookie: "",
  route: "",
  payload: {},
  hash: "",
  credentials: "include",
  return_json: true,
};
