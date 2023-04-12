import fetch from "node-fetch";
import { GET_SETTINGS, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";

export async function GET(settings: typeof GET_SETTINGS) {
  try {
    const { cookie, route, payload, hash, credentials } = settings;
    HASH_DECODE(hash);
    const options = {
      method: "GET",
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
    // Use Object.entries to iterate over the properties of the payload object,
    // and only include the properties that exist in the response object
    if (Object.keys(payload).length === 0) return responseObject;
    const pickedObject = Object.fromEntries(
      Object.entries(payload)
        .filter(([key]) => key in responseObject)
        .map(([key, value]) => [key, responseObject[key]])
    );
    return pickedObject;
  } catch (e) {
    console.log(e);
    return e;
  }
}
