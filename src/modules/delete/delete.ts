import fetch from "node-fetch";
import { ResponseObject } from "../../constants";

export async function DELETE(settings: typeof DEFAULT_DELETE_SETTINGS) {
  try {
    settings = Object.assign({}, DEFAULT_DELETE_SETTINGS, settings);
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

export const DEFAULT_DELETE_SETTINGS: {
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
