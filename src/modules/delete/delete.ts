import fetch from "node-fetch";
import { ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";

export async function DELETE(settings: typeof DELETE_SETTINGS) {
  try {
    HASH_DECODE(settings.hash);
    const options = {
      method: "DELETE",
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
    return responseObject;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const DELETE_SETTINGS: {
  cookie?: string;
  route: string;
  hash: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
} = {
  cookie: "",
  route: "",
  hash: "",
  credentials: "include",
  return_json: true,
};
