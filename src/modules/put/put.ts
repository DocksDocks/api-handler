import fetch from "node-fetch";
import { PUT_SETTINGS, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";

export async function PUT(settings: typeof PUT_SETTINGS) {
  try {
    const { cookie, route, payload, hash, credentials } = settings;
    HASH_DECODE(hash);
    const options = {
      method: "PUT",
      credentials: credentials ?? "include",
      headers: {
        "Content-Type": "application/json",
        cookie: cookie!,
      },
      body: JSON.stringify(payload),
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
