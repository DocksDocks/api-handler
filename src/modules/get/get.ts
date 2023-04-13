import fetch from "node-fetch";
import { Payload, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";

export async function GET(settings: typeof GET_SETTINGS) {
  try {
    HASH_DECODE(settings.hash);
    const options = {
      method: "GET",
      credentials: settings.credentials ?? "include",
      headers: {
        "Content-Type": "application/json",
        cookie: settings.cookie!,
      },
    };
    // Make API request and get response object
    const response = await fetch(settings.route, options);
    if (!settings.return_json) return response;
    const responseObject: ResponseObject = await response.json();
    // Use Object.entries to iterate over the properties of the payload object,
    // and only include the properties that exist in the response object
    if (Object.keys(settings.payload).length === 0) return responseObject;
    const pickedObject = Object.fromEntries(
      Object.entries(settings.payload)
        .filter(([key]) => key in responseObject)
        .map(([key, value]) => [key, responseObject[key]])
    );
    return pickedObject;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const GET_SETTINGS: {
  cookie?: string;
  route: string;
  payload?: Payload;
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
