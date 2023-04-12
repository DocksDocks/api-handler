import fetch from "node-fetch";
import { DELETE_SETTINGS, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";

export async function DELETE(settings: typeof DELETE_SETTINGS) {
  try {
    const { cookie, route, hash, credentials } = settings;
    HASH_DECODE(hash);
    const options = {
      method: "DELETE",
      credentials: credentials ?? "include",
      headers: {
        "Content-Type": "application/json",
        cookie: cookie!,
      },
    };
    // Make API request and get response object
    const response = await fetch(route, options);
    if (!settings.return_json) return response
    const responseObject: ResponseObject = await response.json();
    return responseObject;
  } catch (e) {
    console.log(e);
    return e;
  }
}
